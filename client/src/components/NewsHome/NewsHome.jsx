import newsHomeStyles from "../../scss/NewsHome.module.scss";
import Post from "../Post/Post";
import Navbar from "../Navbar/Navbar";

export default function NewsHome() {
  return (
    <>
      <Navbar />
      <div className={newsHomeStyles.News}>
        <Post />
      </div>
    </>
  );
}
