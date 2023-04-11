import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CardImg from "../../../assets/card-img.png";
import Comment from "./comment";
import Paper from "@mui/material/Paper";

const PostDetails = ({ data, comments }) => {
  return (
    <Stack gap={2}>
      <Paper>
        <Stack flexDirection={{ xs: "column", md: "row" }} gap={4}>
          <Box width={{ xs: "100%", md: "45%" }}>
            <img
              src={CardImg}
              alt={data?.title}
              loading="lazy"
              width="100%"
              height="100%"
            />
          </Box>
          <Stack width={{ xs: "100%", md: "45%" }} gap={2} p={2}>
            <Typography variant="h4">{data?.title}</Typography>
            <Typography variant="body2" sx={{ width: "90%" }}>
              {data?.body}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
      {comments?.length > 0 && <Typography variant="h4">Comments</Typography>}
      <Stack gap={2}>
        {comments?.map((data, index) => {
          return <Comment data={data} key={index} />;
        })}
      </Stack>
    </Stack>
  );
};

export default PostDetails;
