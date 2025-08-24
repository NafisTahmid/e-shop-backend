const express = require("express");
const router = express.Router();
const { Category } = require("../models/category");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching categories" });
  }
});

// Get a category by id
router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(404).json({ message: "The category not found" });
  }
  res.status(200).send(category);
});
// POST a new category
router.post("/", async (req, res) => {
  try {
    const { name, color, icon, image } = req.body;

    const newCategory = new Category({ name, color, icon, image });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating category" });
  }
});

// DELETE a category by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndRemove(req.params.id);

    if (!deletedCategory) {
      return res
        .status(404)
        .json({ message: "Category not found", status: false });
    }

    res.status(200).json({ status: true, message: "Category deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting category", status: false });
  }
});

router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon,
      image: req.body.image,
    },
    { new: true }
  );
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }
  res.status(200).send(category);
});

module.exports = router;
