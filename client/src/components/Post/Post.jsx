import postStyles from "../../scss/Post.module.scss";
import user from "../../assets/icons/user-yell.svg";
import like from "../../assets/icons/thumbs-up.svg";
import dislike from "../../assets/icons/thumbs-down.svg";
import calendar from "../../assets/icons/calendar.svg";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <>
      <div className={postStyles.post}>
        <div className={postStyles.badge}>
          <div className={postStyles.dateBadge}>
            <p id={postStyles.day}>04</p>
            <p id={postStyles.month}>kys</p>
          </div>
        </div>

        <div className={postStyles.postHeader}>
          <div>
            <img src={user} id={postStyles.user} alt="" />
          </div>
          <div>
            <h1>New website</h1>
            <div className={postStyles.nameDate}>
              <p id={postStyles.publisher}>Barbora Slavíková</p>
              <p id={postStyles.dot}>●</p>
              <div className={postStyles.date}>
                <img src={calendar} alt="" id={postStyles.calendar} />
                <p>04.03.2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className={postStyles.article}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            necessitatibus enim optio repudiandae vel vero, explicabo minus!
            Eligendi tempora molestias tenetur enim veniam obcaecati laborum
            adipisci nam reprehenderit tempore consequuntur corrupti aliquam
            excepturi facilis unde, quasi eveniet, dolorem libero assumenda.
            Doloremque, libero veritatis odit eligendi excepturi aspernatur,
            quibusdam obcaecati, maxime repellat a harum natus itaque laudantium
            cupiditate ullam impedit sapiente alias. Officia non quidem
            consequatur, in aperiam nihil hic officiis ipsam tempora voluptas id
            expedita magnam nesciunt maiores sed porro sint repudiandae
            voluptatem. Quidem dignissimos accusantium facilis accusamus
            laudantium eius est laboriosam laborum similique incidunt nisi
            obcaecati itaque adipisci odit
          </p>
        </div>
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
          <Link to={"/article"}>
            <button id={postStyles.read}>READ FULL ARTICLE</button>
          </Link>
        </div>
      </div>
    </>
  );
}
