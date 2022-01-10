import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";
const router = express.Router();

//add middleware before specific actions
//all users can see a post, but to create one, you have to have your own ID

//localhost::5000/posts/
router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
