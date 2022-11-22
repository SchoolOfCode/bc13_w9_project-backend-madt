const express = require("express");
const router = express.Router();
// Write your router code here!

const {
  getCus,
  cusById,
  /*
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
  */

} = require("../models/customers.js");

router.get("/", async function (req, res) {
  const customer = await getCus();
  res.json({ success: true, payload: customer });
  
});

router.get("/:id", async function (req, res) {
  const customer = await cusById(req.params.id);
  res.json({ success: true, payload: customer });
});



module.exports = router;

