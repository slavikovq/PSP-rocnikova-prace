import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import News from "./News/News";
import ArticlePage from "./ArticlePage/ArticlePage";
import ProtectedRoute from "../components/Routes/ProtectedRoute/ProtectedRoute";
import AdminRoute from "../components/Routes/AdminRoute/AdminRoute";
import OwnerRoute from "../components/Routes/OwnerRoute/OwnerRoute";
import EditProfile from "./EditProfile/EditProfile";
import AddPost from "./AddPost/AddPost";
import PostList from "./PostList/PostList";
import LikedPosts from "./LikedPosts/LikedPosts";
import Administrators from "./Administrators/Administrators";
import EditPost from "./EditPost/EditPost";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/panel/edit-profile" element={<EditProfile />} />
            <Route path="/panel/liked-posts" element={<LikedPosts />} />

  
              <Route path="/panel" element={<AdminDashboard />} />
              <Route path="/panel/add-post" element={<AddPost />} />
              <Route path="/panel/post-list" element={<PostList />} />
              <Route path="/panel/edit-post" element={<EditPost />} />

                <Route path="/panel/administrators" element={<Administrators />} />
              </Route>
          <Route path="/news" element={<News />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
