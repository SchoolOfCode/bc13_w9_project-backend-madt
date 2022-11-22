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
  if (req.query.search !== undefined) {
    const searchedCustomer = await getCus(req.query.search);
    return res.json({ success: true, payload: searchedCustomer });
  }

  const customer = await getCustomer();
  res.json({ success: true, payload: customer });
});

router.get("/:id", async function (req, res) {
  const customer = await cusById(req.params.id);
  res.json({ success: true, payload: customer });
});



module.exports = router;

