import likedPostStyles from "../../scss/LikedPost.module.scss";
import user from "../../assets/icons/user-yell.svg";
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

export default function LikedPost({
  title,
  creator,
  dateCreated,
  content,
  id,
}) {
  const [creatorName, setCreatorName] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await getUserById(creator);
      if (res.status === 404) return setCreatorName(null);
      if (res.status === 200) {
        const name = `${res.payload.firstName} ${res.payload.lastName}`;
        setIsLoading(false);
        setCreatorName(name);
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={likedPostStyles.post}>
        <div className={likedPostStyles.badge}>
          <div className={likedPostStyles.dateBadge}>
            <p id={likedPostStyles.day}>{dateDay()}</p>
            <p id={likedPostStyles.month}>{dateMonth()}</p>
          </div>
        </div>

        <div className={likedPostStyles.postHeader}>
          <div>
            <img src={user} id={likedPostStyles.user} alt="" />
          </div>
          <div>
            <h1>{title}</h1>
            <div className={likedPostStyles.nameDate}>
              <p id={likedPostStyles.publisher}>{creatorName}</p>
              <p id={likedPostStyles.dot}>●</p>
              <div className={likedPostStyles.date}>
                <img src={calendar} alt="" id={likedPostStyles.calendar} />
                <p>{convertDate()}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={likedPostStyles.article}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />

        <div className={likedPostStyles.postFooter}>
          <Link to={`/article/${id}`}>
            <button id={likedPostStyles.read}>READ FULL ARTICLE</button>
          </Link>
        </div>
      </div>
    </>
  );
}
