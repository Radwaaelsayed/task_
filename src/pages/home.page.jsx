import React from "react";
import Layout from "../components/organizms/layout";
import { useDispatch, useSelector } from "react-redux";
import HomeTemplate from "../components/template/home.template";
import { useEffect } from "react";
import { getAllPostsRequest } from "../services/posts";

const HomePage = () => {
  const { isLoading, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPostsRequest());
  }, []);

  return (
    <Layout>
      <HomeTemplate posts={posts} isLoading={isLoading} />
    </Layout>
  );
};

export default HomePage;
