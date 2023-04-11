import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardImg from "../../../assets/card-img.png";
export default function PostCard({ data, handelClick }) {
  return (
    <Card sx={{ width: { xs: "100%", md: 600 } }}>
      <CardHeader
        title={data?.title}
        onClick={handelClick}
        sx={{ cursor: "pointer", textTransform: "capitalize" }}
      />
      <CardMedia component="img" height="250" image={CardImg} alt="card img" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data?.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
