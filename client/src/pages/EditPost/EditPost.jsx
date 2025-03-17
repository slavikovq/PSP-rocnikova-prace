import editPostStyles from "../../scss/EditPost.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";

export default function EditPost() {


  return (
    <>
      <div className={editPostStyles.page}>
        <AdminBar />
        <div className={editPostStyles.post}>
          <div className={editPostStyles.form}>
            <form>
              <div>
                <span>Title</span>
                <input
                  type="text"
                  placeholder="Title"
                  id={editPostStyles.title}
                />
              </div>
              <div>
              <textarea name="" id="" placeholder="Write your post..."></textarea>
              </div>
              <button type="submit">Edit Post</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
