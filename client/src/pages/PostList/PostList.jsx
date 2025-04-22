import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import postListStyles from "../../scss/PostList.module.scss";
import { useEffect, useState } from "react";
import { getAllPosts, getAllUserPosts } from "../../models/post";
import { useAuth } from "../../context/AuthProvider";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const load = async () => {
      const res = user.role === "admin" ? await getAllUserPosts() : await getAllPosts();
      if (res.status === 500 || res.status === 404) return setIsLoading(false);
      if (res.status === 200) {
        setPosts(res.payload);
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={postListStyles.page}>
        <AdminBar />
        <div className={postListStyles.edit}>
          <div className={postListStyles.bg}>
            <div>
              <div className={postListStyles.row}>
                {posts
                  .slice()
                  .reverse()
                  .map((post) => (
                    <Link to={`/article/${post._id}`}>
                      <PostCard
                        key={post._id}
                        title={post.title}
                        creator={post.creator}
                        dateCreated={post.dateCreated}
                        content={post.content}
                        id={post._id}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
