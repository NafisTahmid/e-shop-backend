const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const users = await User.find().select("-passwordHash");
  if (!users) {
    return res.status(404).json({ message: "Users not found" });
  }
  res.status(200).send(users);
});

router.get(`/:id`, async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).send(user);
});
router.post("/", async (req, res) => {
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    passwordHash: passwordHash,
    street: req.body.street,
    apartment: req.body.apartment,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    isAdmin: req.body.isAdmin,
  });
  await user.save();

  if (!user) {
    return res.status(400).send("User not created");
  }
  res.status(201).send(user);
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // If user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    // If password is incorrect
    if (!bcrypt.compareSync(req.body.password, user.passwordHash)) {
      return res
        .status(400)
        .json({ message: "Invalid password", status: false });
    }

    // Create JWT Token
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET, // Use environment variable for secret
      { expiresIn: "1d" }
    );

    res.status(200).send({ message: "Login successful", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", status: false });
  }
});

router.get(`/get/count`, async (req, res) => {
  const usersCount = await User.countDocuments();
  if (!usersCount) {
    res.status(500).json({ status: false });
  }
  res.status(200).json({ total: usersCount });
});

router.delete("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(500).send("Invalid id");
  }
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json("User not found");
  }
  res.status(200).send("User deleted");
});
module.exports = router;
