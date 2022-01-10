import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  console.log(newPost);

  try {
    let test = await newPost.save();

    console.log(test);

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  // console.log(req);
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const deletedId = await PostMessage.findByIdAndRemove(_id);

  if (deletedId) {
    res.json("post deleted successfully");
  } else {
    res.json("post not deleted");
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  //setup for only allowing a logged-in user to like a post once

  //first check if user is authenticated
  //userId comes from auth set up in route, before callined likePost
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const post = await PostMessage.findById(_id);

  //is userId already in the like section or not
  //each like will be an id from a specific user
  const index = post.likes.findIndex((id) => {
    id === String(req.userId);
  });

  //if id is not found by operatin above, index = -1
  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    //returns array of all the likes other than current persons like
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    {
      post,
    },
    { new: true }
  );

  res.json(updatedPost);
};
