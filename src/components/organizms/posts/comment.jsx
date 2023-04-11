import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Comment = ({ data }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack flexDirection="row" gap={2}>
        <Avatar
          alt={data?.username}
          src="/broken-image.jpg"
          sx={{ width: 56, height: 56 }}
        />{" "}
        <Stack>
          <Stack>
            <Typography
              variant="h5"
              fontSize="14px"
              color="GrayText"
              fontWeight="700"
            >
              {data?.username}
            </Typography>
            <Typography variant="h6" fontSize="12px" color="gray">
              {data?.email}
            </Typography>
          </Stack>
          <Typography variant="p" fontSize="16px" fontWeight="600">
            {data?.comment}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Comment;
