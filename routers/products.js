const express = require("express");
const { Product } = require("../models/product");
const { Category } = require("../models/category");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("Invalid image type");
    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const filename = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${filename}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.get(`/`, async (req, res) => {
  const productList = await Product.find().populate("category");
  if (!productList) {
    return res.status(404).json({ success: false });
  }
  res.status(200).json(productList);
});

router.get(`/:id`, async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");
  if (!product) {
    return res.status(404).send("product not found");
  }
  res.status(200).send(product);
});

router.post(`/`, uploadOptions.single("image"), async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(400).send("Category not found");
  }
  const file = req.file;
  if (!file) {
    return res.status(400).send("No image in the request");
  }
  const filename = req.file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: `${basePath}${filename}`,
    images: req.body.images,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    isFeatured: req.body.isFeatured,
  });
  await newProduct.save();
  res.status(201).send(newProduct);
});

router.put("/:id", uploadOptions.single("image"), async (req, res) => {
  const { categoryCheck } = req.body.category;
  if (categoryCheck) {
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(404).send("Invalid category");
    }
  }
  const product = await Product.findById(req.params.id);
  const file = req.file;
  let imagePath;
  if (file) {
    const filename = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    imagePath = `${basePath}${filename}`;
  } else {
    imagePath = product.image;
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: imagePath,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
    },
    { new: true }
  );
  if (!updatedProduct) {
    return res.status(404).send("Product not found");
  }
  res.status(200).json(updatedProduct);
});

router.delete("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(500).send("Invalid id");
  }
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json("Product not found");
  }
  res.status(200).send("Product deleted");
});

router.get(`/get/count`, async (req, res) => {
  const productsCount = await Product.countDocuments();
  if (!productsCount) {
    res.status(500).json({ status: false });
  }
  res.status(200).json({ total: productsCount });
});

router.get(`/get/featured/:count`, async (req, res) => {
  const count = req.params.count ? req.params.count : 0;
  const featuredProducts = await Product.find({ isFeatured: true }).limit(
    +count
  );
  if (!featuredProducts) {
    res.status(500).json({ status: false });
  }
  res.status(200).json(featuredProducts);
});

router.put(
  "/gallery-images/:id",
  uploadOptions.array("images", 10),
  async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid id");
    }
    let imagePaths = [];
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    const files = req.files;
    if (files) {
      files.map((file) => {
        imagePaths.push(`${basePath}${file.filename}`);
      });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        images: imagePaths,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(updatedProduct);
  }
);
module.exports = router;
