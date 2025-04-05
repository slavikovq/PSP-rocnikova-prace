import articleStyles from "../../scss/Article.module.scss";
import userImg from "../../assets/icons/user-yell.svg";
import like from "../../assets/icons/thumbs-up.svg";
import dislike from "../../assets/icons/thumbs-down.svg";
import calendar from "../../assets/icons/calendar.svg";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../models/post";
import { useState, useEffect } from "react";
import { getUserById } from "../../models/user";
import DOMPurify from "dompurify";
import { useAuth } from "../../context/AuthProvider";

export default function Article() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [creatorName, setCreatorName] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const load = async () => {
      const res = await getPostById(id);
      if (res.status === 500 || res.status === 404) return setIsLoading(null);
      if (res.status === 200) {
        setPost(res.payload);
        setIsLoading(false);
      }
    };
    load();
  }, [id]);

  useEffect(() => {
    const loadCreator = async () => {
      if (!post) return;
      const res = await getUserById(post.creator);
      if (res.status === 404) return setCreatorName(null);
      if (res.status === 200) {
        const name = `${res.payload.firstName} ${res.payload.lastName}`;
        setIsLoading(false);
        setCreatorName(name);
      }
    };
    loadCreator();
  }, [post]);

  const convertDate = () => {
    const date = new Date(post.dateCreated);
    return date.toLocaleDateString("cs-CZ");
  };

  const dateMonth = () => {
    const date = new Date(post.dateCreated);
    return date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  };

  const dateDay = () => {
    const date = new Date(post.dateCreated);
    return date.getDate();
  };

  if (isLoading === null) {
    return <p>Not found!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={articleStyles.articleCard}>
        <div className={articleStyles.badge}>
          <div className={articleStyles.datebadge}>
            <p id={articleStyles.day}>{dateDay()}</p>
            <p id={articleStyles.month}>{dateMonth()}</p>
          </div>
        </div>
        <div className={articleStyles.article}>
          <div className={articleStyles.postheader}>
            <div>
              <img src={userImg} id={articleStyles.user} alt="" />
            </div>
            <div>
              <h1>{post.title}</h1>
              <div className={articleStyles.namedate}>
                <p id={articleStyles.publisher}>{creatorName}</p>
                <p id={articleStyles.dot}>●</p>
                <div className={articleStyles.date}>
                  <img src={calendar} alt="" id={articleStyles.calendar} />
                  <p>{convertDate()}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={articleStyles.text}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content),
            }}
          />
          <div className={articleStyles.postfooter}>
            <div className={articleStyles.rating}>
              <div>
                <p>0</p>
                <img src={like} alt="" id={articleStyles.rate} />
              </div>
              <div>
                <p>5</p>
                <img src={dislike} alt="" id={articleStyles.rate} />
              </div>
            </div>
            {user.role === "owner" || user.role === "admin" ? (
              <>
                <Link to={"/panel/post-list"}>
                  <button id={articleStyles.read}>EDIT</button>
                </Link>
              </>
            ) : (
              ""
            )}
            <Link to={"/news"}>
              <button id={articleStyles.read}>BACK</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
