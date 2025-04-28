import postStyles from "../../scss/Post.module.scss";
import like from "../../assets/icons/thumbs-up.svg";
import dislike from "../../assets/icons/thumbs-down.svg";
import calendar from "../../assets/icons/calendar.svg";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { getUserById } from "../../models/user";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { alert } from "../../function/sweetalert";
import { likePost, dislikePost, getPostById } from "../../models/post";

export default function Post({ title, creator, dateCreated, content, id }) {
  const [creatorName, setCreatorName] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    const load = async () => {
      const res = await getUserById(creator);
      if (res.status === 404) {
        setCreatorName(null);
        setIsLoading(false); 
        return;
      }
      
      if (res.status === 200) {
        const name = `${res.payload.firstName} ${res.payload.lastName}`;
        setIsLoading(false);
        setCreatorName(name);
      }

      const postRes = await getPostById(id);
      if (postRes.status === 200) {
        setLikes(postRes.payload.isLiked.length);
        setDislikes(postRes.payload.isDisliked.length);
      }
    };
    load();
  }, []);

  const convertDate = () => {
    const date = new Date(dateCreated);
    return date.toLocaleDateString("cs-CZ");
  };

  const dateMonth = () => {
    const date = new Date(dateCreated);
    return date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  };

  const dateDay = () => {
    const date = new Date(dateCreated);
    return date.getDate();
  };

  const handleRating = async (ratingType) => {
    if (!user) return alert("info", "You have to be logged in to rate this post!");
    const res =
      ratingType === "like"
        ? await likePost(id, user._id)
        : await dislikePost(id, user._id);

    if (res.status === 200) {
      const postRes = await getPostById(id);
      setLikes(postRes.payload.isLiked.length);
      setDislikes(postRes.payload.isDisliked.length);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={postStyles.post}>
        <div className={postStyles.badge}>
          <div className={postStyles.dateBadge}>
            <p id={postStyles.day}>{dateDay()}</p>
            <p id={postStyles.month}>{dateMonth()}</p>
          </div>
        </div>

        <div className={postStyles.postHeader}>
          <div>
            <img src={user} id={postStyles.user} alt="" />
          </div>
          <div>
            <h1>{title}</h1>
            <div className={postStyles.nameDate}>
              <p id={postStyles.publisher}>{creatorName ?? "Deleted user"}</p>
              <p id={postStyles.dot}>●</p>
              <div className={postStyles.date}>
                <img src={calendar} alt="" id={postStyles.calendar} />
                <p>{convertDate()}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={postStyles.article}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
        <div className={postStyles.postFooter}>
          <div className={postStyles.rating}>
            <div>
              <p>{likes}</p>
              <img
                src={like}
                alt=""
                id={postStyles.rate}
                onClick={() => handleRating("like")}
              />
            </div>
            <div>
              <p>{dislikes}</p>
              <img
                src={dislike}
                alt=""
                id={postStyles.rate}
                onClick={() => handleRating("dislike")}
              />
            </div>
          </div>
          <Link to={`/article/${id}`}>
            <button id={postStyles.read}>READ FULL ARTICLE</button>
          </Link>
        </div>
      </div>
    </>
  );
}
