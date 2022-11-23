import express from "express";
const router = express.Router();
// Write your router code here!

import {
  getCus,
  cusById,
  /*
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
  */

} from "../models/customers.js";

router.get("/", async function (req, res) {
  const customer = await getCus();
  res.json({ success: true, payload: customer });
  
});

router.get("/:id", async function (req, res) {
  const customer = await cusById(req.params.id);
  res.json({ success: true, payload: customer });
});



export default router = customerRouter ;

