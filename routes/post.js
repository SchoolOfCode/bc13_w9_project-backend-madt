import express from 'express'
const router = express.Router();
// Write your router code here!

import {
  getPosts,
  postsById,
  /*
  createPost,
  
  
  */

}  from "../models/posts.js";

router.get("/", async function (req, res) {
  const posts = await getPosts();
  res.json({ success: true, payload: posts });
  
});

router.get("/:id", async function (req, res) {
  const posts = await postsById(req.params.id);
  res.json({ success: true, payload: posts });
});

router.post("/", async function (req,res){
  const newPost = await createPost(req.body);
  res.status(201).json({success:true ,payload: newPost})
  
})

export default router = postRouter

