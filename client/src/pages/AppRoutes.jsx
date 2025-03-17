import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import News from "./News/News";
import ArticlePage from "./ArticlePage/ArticlePage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import EditProfile from "./EditProfile/EditProfile";
import OwnerAddAdmin from "./OwnerAddAdmin/OwnerAddAdmin";
import AddPost from "./AddPost/AddPost";
import EditPost from "./EditPost/EditPost";
import LikedPosts from "./LikedPosts/LikedPosts";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/panel" element={<AdminDashboard />} />
            <Route path="/panel/edit-profile" element={<EditProfile/>} />
            <Route path="/panel/add-admin" element={<OwnerAddAdmin/>} />
            <Route path="/panel/add-post" element={<AddPost/>} />
            <Route path="/panel/edit-post" element={<EditPost/>} />
            <Route path="/panel/liked-posts" element={<LikedPosts/>} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
