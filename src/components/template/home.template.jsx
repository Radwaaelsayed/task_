import React from "react";
import PostCard from "../organizms/posts/card";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loading from "../atoms/loading";

const HomeTemplate = ({ posts, isLoading }) => {
  const navigate = useNavigate();
  return isLoading?.type == "list" && isLoading?.loading ? (
    <Loading />
  ) : (
    <Stack gap={2} justifyContent="center" alignItems="center">
      {posts?.map((data, index) => {
        return (
          <PostCard
            key={index}
            data={data}
            handelClick={() => navigate(`/posts/${data?.id}`)}
          />
        );
      })}
    </Stack>
  );
};

export default HomeTemplate;
