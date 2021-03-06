import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  likes: {
    type: [String],
    defaut: [],
  },
  title: String,
  message: String,
  creator: String,
  tags: [String],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
