import { Box, LinearProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
};

export default Loading;
