const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const currdir = path.join(__dirname, "/nodeapps");
const product = require("./modules/product");

app.set("viewEngine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];
const solez = [true, false];

const createdocument = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/farmStand");
  } catch {
    console.log("failed to connect");
  }
};
createdocument();
app.get("/products", async (req, res) => {
  const inventory = await product.find({});
  res.render("index.ejs", { inventory });
});
app.get("/products/newprod", (req, res) => {
  res.render("newproduct.ejs");
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const fproduct = await product.findById(id);
  res.render("details.ejs", { fproduct, id });
});
app.get("/products/:id/editprod", async (req, res) => {
  const { id } = req.params;
  const eproduct = await product.findById(id);
  res.render("editproduct.ejs", { eproduct, categories, solez });
});
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const eresult = await product.findByIdAndUpdate(id, req.body, { new: true });
  res.redirect(`/products/${id}`);
});
app.post("/products", async (req, res) => {
  const newproduct = new product(req.body);
  await newproduct.save();
  console.log(newproduct);
  res.redirect(`/products/${newproduct._id}`);
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const dprod = await product.findByIdAndDelete(id);
  res.redirect("/products");
});
app.listen(8080, () => {
  console.log("Starport to 8080");
});
