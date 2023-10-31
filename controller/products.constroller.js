const pool = require("../database/index");
const productsController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from products");
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({ state: "error" });
    }
  },
  getByID: async (req, res) => {
    try {
      const id = req.params.id;
      const [rows, fields] = await pool.query(
        "select * from products where id = ?",
        [id]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({ state: "error" });
    }
  },
  createProduct: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "insert into products(name,category,price,stock) values(?,?,?,?)",
        [req.body.name, req.body.category, req.body.price, req.body.stock]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({ state: "error" });
    }
  },
  editProduct: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "update products set name=?, category=?, price=?, stock=?",
        [req.body.name, req.body.category, req.body.price, req.body.stock]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({ state: "error" });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const [rows, fields] = await pool.query(
        "delete from products where id = ?",
        [id]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({ state: "error" });
    }
  },
};

module.exports = productsController;
