import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

import moment from "moment";

const handleDelete = (e) => {
  console.log(e);
};

function Post({ post, currentId, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log(currentId);
  };

  return (
    <Card className={classes.card} title={post.title}>
      <div>
        {/* <button onClick={handleClick}>click me</button> */}
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "black" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <i className="fas fa-ellipsis-h"></i>
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <i className="fas fa-thumbs-up"></i>
          Like
          {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <i className="fas fa-trash"></i>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
