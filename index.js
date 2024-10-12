const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/product.route.js");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// testing
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

// Connect with db
mongoose
  .connect(
    "mongodb+srv://desilvahima:bkcJjJu0VUSZ744D@backenddb.wgr1g.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => console.log("Connected to database!"));
