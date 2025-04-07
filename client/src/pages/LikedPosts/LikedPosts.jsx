import likedPostsStyles from "../../scss/LikedPosts.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import LikedPost from "../../components/LikedPost/LikedPost";

export default function LikedPosts() {
  return (
    <>
      <div className={likedPostsStyles.page}>
        <AdminBar />
        <div className={likedPostsStyles.edit}>
          <div className={likedPostsStyles.bg}>
            <div>
              <div className={likedPostsStyles.row}>
                <LikedPost />
                <LikedPost />
                <LikedPost />
                <LikedPost />
                <LikedPost />
                <LikedPost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
