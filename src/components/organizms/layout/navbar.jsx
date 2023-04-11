import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openAddPostModel } from "../../../services/model/actions";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <AdbIcon
            sx={{ display: "flex", mr: 1 }}
            onClick={() => navigate("/")}
          />

          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Social app
            </Typography>
          </Box>

          <Box>
            <Button
              onClick={() => dispatch(openAddPostModel())}
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ color: "white" }}
            >
              Create Post
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
