import likedPostsStyles from "../../scss/LikedPosts.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import LikedPost from "../../components/LikedPost/LikedPost";
import { getAllLikedPosts } from "../../models/post";
import { useAuth } from "../../context/AuthProvider";
import { useState, useEffect } from "react";

export default function LikedPosts() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const load = async () => {
      const res = await getAllLikedPosts(user._id);
      if (res.status === 500 || res.status === 404) return setIsLoading(null);
      if (res.status === 200) {
        setPosts(res.payload);
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (isLoading === null) {
    return <p>Not found!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={likedPostsStyles.page}>
        <AdminBar />
        <div className={likedPostsStyles.edit}>
          <div className={likedPostsStyles.bg}>
            <div>
              <div className={likedPostsStyles.row}>
                {posts.slice().reverse().map((post) => (
                  <LikedPost
                    key={post._id}
                    title={post.title}
                    creator={post.creator}
                    dateCreated={post.dateCreated}
                    content={post.content}
                    id={post._id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
