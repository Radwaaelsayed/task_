import React from "react";
import NavBar from "./navbar";
import { Container, Stack } from "@mui/material";
import AddPostForm from "../posts/form";

const Layout = ({ children }) => {
  return (
    <Stack bgcolor="#e8eaf6">
      <NavBar />
      <Container maxWidth="xl" sx={{ my: 12 }}>
        {children}
      </Container>
      <AddPostForm />
    </Stack>
  );
};

export default Layout;
