const express = require("express");
const router = express.Router();
// Write your router code here!

const {
  getPosts,
  postsById,
  /*
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
  */

} = require("../models/posts.js");

router.get("/", async function (req, res) {
  const posts = await getPosts();
  res.json({ success: true, payload: posts });
  
});

router.get("/:id", async function (req, res) {
  const posts = await postsById(req.params.id);
  res.json({ success: true, payload: posts });
});



module.exports = router;

