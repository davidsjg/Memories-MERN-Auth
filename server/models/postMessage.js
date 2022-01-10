import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  likeCount: {
    type: Number,
    defaut: 1,
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
