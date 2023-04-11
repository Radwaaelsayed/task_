import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openAddPostModel } from "../../../services/model/actions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import { createPostRequest } from "../../../services/posts";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function AddPostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => dispatch(openAddPostModel());
  const open = useSelector((state) => state.models.isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
      id: Math.floor(Math.random() * 10),
    },
    shouldUnregister: true,
  });
  const onSubmit = async (values) => {
    const action = () => {
      reset();
      dispatch(openAddPostModel());
      navigate("/");
    };
    dispatch(
      createPostRequest(
        { ...values, id: Math.floor(Math.random() * 100) },
        action
      )
    );
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
              <Typography sx={{ alignSelf: "center" }} variant="h5">
                Create Post
              </Typography>

              <TextField
                id="outlined-required"
                label="Title"
                error={errors?.title?.message}
                helperText={errors?.title?.message}
                name="title"
                {...register("title", { required: "Title is Required" })}
              />

              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                error={errors?.body?.message}
                helperText={errors?.body?.message}
                name="body"
                {...register("body", { required: "Description is Required" })}
              />
              <Button
                type="submit"
                variant="contained"
                alignSelf="center"
                sx={{ width: { xs: "100%", md: "30%" } }}
              >
                Save
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
