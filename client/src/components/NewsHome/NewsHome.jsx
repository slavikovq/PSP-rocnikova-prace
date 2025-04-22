import newsHomeStyles from "../../scss/NewsHome.module.scss";
import Post from "../Post/Post";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../models/post";

export default function NewsHome() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await getAllPosts();
      if(res.status === 500 || res.status === 404) return setIsLoading(false);
      if(res.status === 200){
        setPosts(res.payload);
        setIsLoading(false);
      }
    }
    load();
  }, [])

  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <>
      <Navbar />
      <div className={newsHomeStyles.News}>
        {
          posts.slice().reverse().map((post) => (
            <Post key={post._id} title={post.title} creator={post.creator} dateCreated={post.dateCreated} content={post.content} id={post._id}/>
          ))
        }
      </div>
    </>
  );
}
