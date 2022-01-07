import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Post from "./Post/Post";

function Posts({ currentId, setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item x={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
