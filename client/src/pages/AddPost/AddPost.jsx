import addPostStyles from "../../scss/AddPost.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";


export default function AddPost() {

  return (
    <>
      <div className={addPostStyles.page}>
        <AdminBar />
        <div className={addPostStyles.post}>
          <div className={addPostStyles.form}>
            <form>
              <div>
                <span>Title</span>
                <input
                  type="text"
                  placeholder="Title"
                  id={addPostStyles.title}
                />
              </div>
              <div>
                <textarea name="" id="" placeholder="Write your post..."></textarea>
              </div>
              <button type="submit">Add Post</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
