import likedPostsStyles from "../../scss/LikedPosts.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";

export default function LikedPosts() {


  return (
    <>
      <div className={likedPostsStyles.page}>
        <AdminBar />
        <div className={likedPostsStyles.post}>
            <h1>favoriti</h1>
        </div>
      </div>
    </>
  );
}
