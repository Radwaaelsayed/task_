import { Stack } from "@mui/material";
import React from "react";
import PostCard from "../organizms/posts/card";
import Loading from "../atoms/loading";
import PostDetails from "../organizms/posts/details";

const PostDetailsTemplate = ({ post, isLoading, comments }) => {
  return isLoading?.type == "details" && isLoading?.loading ? (
    <Loading />
  ) : (
    <PostDetails data={post} comments={comments} />
  );
};

export default PostDetailsTemplate;
