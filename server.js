const express = require("express");
const app = express();

require("dotenv").config();

const productsRouter = require("./routes/products.router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is Running.....`);
});

module.exports = app;
