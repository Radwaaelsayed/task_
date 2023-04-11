import React from "react";
import PostCard from "../organizms/posts/card";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeTemplate = ({ posts, isLoading }) => {
  const navigate = useNavigate();
  return (
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
