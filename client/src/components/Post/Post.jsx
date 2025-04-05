import postStyles from "../../scss/Post.module.scss";
import user from "../../assets/icons/user-yell.svg";
import like from "../../assets/icons/thumbs-up.svg";
import dislike from "../../assets/icons/thumbs-down.svg";
import calendar from "../../assets/icons/calendar.svg";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { getUserById } from "../../models/user";
import { useState, useEffect } from "react";

export default function Post({ title, creator, dateCreated, content, id }) {
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
    return date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  }

  const dateDay = () => {
    const date = new Date(dateCreated);
    return date.getDate();
  }


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
              <p id={postStyles.publisher}>{creatorName}</p>
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
              <p>0</p>
              <img src={like} alt="" id={postStyles.rate} />
            </div>
            <div>
              <p>5</p>
              <img src={dislike} alt="" id={postStyles.rate} />
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
