import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home.page";
import PostDetailsPage from "../pages/postDetails.page";

export const router = createBrowserRouter([
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "Post",
    path: "/posts/:postId",
    element: <PostDetailsPage />,
  },
]);
