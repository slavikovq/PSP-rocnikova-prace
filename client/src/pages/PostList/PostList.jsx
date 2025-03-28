import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import postListStyles from "../../scss/PostList.module.scss";

export default function PostList() {
  return (
    <>
      <div className={postListStyles.page}>
        <AdminBar />
        <div className={postListStyles.edit}>
          <div className={postListStyles.bg}>
            <div>
              <div className={postListStyles.row}>
                <PostCard />
                <PostCard />
              </div>
              <div className={postListStyles.row}>
                <PostCard />
                <PostCard />
              </div>
              <div className={postListStyles.row}>
                <PostCard />
                <PostCard />
              </div>
              <div className={postListStyles.row}>
                <PostCard />
                <PostCard />
              </div>
              <div className={postListStyles.row}>
                <PostCard />
                <PostCard />
              </div>
              <div className={postListStyles.row}>
                <PostCard />
                <PostCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
