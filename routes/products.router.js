const express = require("express");
const router = express.Router();

const productsController = require("../controller/products.constroller");

router.get("/", productsController.getAll);
router.get("/:id", productsController.getByID);
router.post("/", productsController.createProduct);
router.put("/", productsController.editProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
