import express from 'express'
const router = express.Router();
// Write your router code here!

import {
  getPosts,
  postsById,
  createPost,
  delPost,
  
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
  
});

router.delete("/:id", async function (req,res){
  const dPost = await delPost(req.params.id);
  res.status(200).json({success:true, payload :dPost})
});

/* export default router = postRouter */
export default router;
