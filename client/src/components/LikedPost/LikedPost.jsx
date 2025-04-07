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

export default function LikedPost() {
  return (
    <>
      <div className={likedPostStyles.post}>
        <div className={likedPostStyles.badge}>
          <div className={likedPostStyles.dateBadge}>
            <p id={likedPostStyles.day}>2</p>
            <p id={likedPostStyles.month}>MAR</p>
          </div>
        </div>

        <div className={likedPostStyles.postHeader}>
          <div>
            <img src={user} id={likedPostStyles.user} alt="" />
          </div>
          <div>
            <h1>Title</h1>
            <div className={likedPostStyles.nameDate}>
              <p id={likedPostStyles.publisher}>Creator</p>
              <p id={likedPostStyles.dot}>●</p>
              <div className={likedPostStyles.date}>
                <img src={calendar} alt="" id={likedPostStyles.calendar} />
                <p>datum</p>
              </div>
            </div>
          </div>
        </div>
        <div className={likedPostStyles.article}>
          <p>asdasdasdasd</p>
          <div />
        </div>

        <div className={likedPostStyles.postFooter}>
          <Link to={`/article/`}>
            <button id={likedPostStyles.read}>READ FULL ARTICLE</button>
          </Link>
        </div>
      </div>
    </>
  );
}
