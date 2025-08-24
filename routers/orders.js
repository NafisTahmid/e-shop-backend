const express = require("express");
const router = express.Router();
const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");

function applyDiscount(cartTotal, discount) {
  let discountAmount = 0;

  // If discount is a percentage
  if (discount.type === "percentage") {
    discountAmount = (discount.value / 100) * cartTotal;
  }
  // If discount is a fixed amount
  else if (discount.type === "fixed") {
    discountAmount = discount.value;
  }

  // Calculate the new total after applying discount
  const newTotal = cartTotal - discountAmount;
  return { newTotal, discountAmount };
}

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name")
      .sort({ dateOrdered: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching orders" });
  }
});
// Get single order
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name")
      .populate({
        path: "orderItems",
        populate: { path: "product", populate: "category" },
      });
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching orders" });
  }
});
// Post an order
// Post an order
router.post(`/`, async (req, res) => {
  try {
    // Create orderItems and save them, getting their IDs
    const orderItemsIdsResolved = await Promise.all(
      req.body.orderItems.map(async (orderItem) => {
        let newOrderItem = new OrderItem({
          quantity: orderItem.quantity,
          product: orderItem.product,
        });
        newOrderItem = await newOrderItem.save();
        return newOrderItem._id; // Resolve the orderItem ID
      })
    );

    // Calculate the total price for the order
    const totalPrices = await Promise.all(
      orderItemsIdsResolved.map(async (orderItemId) => {
        const orderedItem = await OrderItem.findById(orderItemId).populate(
          "product",
          "price"
        );
        // Correct total price calculation: price * quantity
        const total = orderedItem.product.price * orderedItem.quantity;
        return total;
      })
    );

    // Sum up all the individual item totals to get the order total
    const orderTotal = totalPrices.reduce((a, b) => a + b, 0);
    if (req.body.discount) {
      const { newTotal, discountAmount } = applyDiscount(
        orderTotal,
        req.body.discount
      );
      orderTotal = newTotal; // Apply the new total after discount
      console.log(`Discount applied: ${discountAmount}`); // Log the discount amount
    }

    // Create and save the order
    let order = new Order({
      orderItems: orderItemsIdsResolved,
      shippingAddress1: req.body.shippingAddress1,
      shippingAddress2: req.body.shippingAddress2,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      phone: req.body.phone,
      status: req.body.status,
      totalPrice: orderTotal,
      user: req.body.user,
    });

    order = await order.save();
    res.status(201).send(order); // Return the newly created order
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error creating order", error: err.message });
  }
});

// Update an order
router.put("/:id", async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
    },
    { new: true }
  );
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).send(order);
});

// DELETE an order by ID
router.delete("/:id", async (req, res) => {
  try {
    let deletedOrder = await Order.findById(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({
        message: "Order not found",
        status: false,
      });
    }
    await OrderItem.deleteMany({ _id: { $in: deletedOrder.orderItems } });

    deletedOrder = await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/get/userorders/:userid", async (req, res) => {
  try {
    const userOrderList = await Order.find({ user: req.params.userid })
      .populate({
        path: "orderItems",
        populate: {
          path: "product",
          populate: "category",
        },
      })
      .sort({ dateOrdered: -1 });
    res.json(userOrderList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching orders" });
  }
});
module.exports = router;
