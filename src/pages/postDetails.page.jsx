import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPostCommentsRequest,
  getPostDetailsRequest,
} from "../services/posts";
import Layout from "../components/organizms/layout";
import PostDetailsTemplate from "../components/template/postDetails.template";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, post, comments } = useSelector((state) => state.posts);

  useEffect(() => {
    if (postId) {
      dispatch(getPostDetailsRequest({ postId }));
      dispatch(getPostCommentsRequest({ postId }));
    }
  }, [postId]);
  return (
    <Layout>
      <PostDetailsTemplate
        post={post}
        isLoading={isLoading}
        comments={comments}
      />
    </Layout>
  );
};

export default PostDetailsPage;
