import "../../scss/NewsHome.scss";
import Post from "../Post/Post";
import Navbar from "../Navbar/Navbar"

export default function NewsHome() {
  return (
    <>
        <Navbar/>
        <div className="News">
          <Post/>
        </div>
        
    </>
  )
}
