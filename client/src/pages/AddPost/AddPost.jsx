import addPostStyles from "../../scss/AddPost.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"


export default function AddPost() {
  const { user } = useAuth();

  return (
    <>
      <div className={addPostStyles.page}>
        <AdminBar />
        <div className={addPostStyles.edit}>
          <div className={addPostStyles.bg}>
            <div className={addPostStyles.form}>
              <div>
                <form>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter title..."
                      id={addPostStyles.title}
                    />
                  </div>

                  <div id={addPostStyles.details}>
                    <div>
                      <input
                        type="text"
                        defaultValue={user.firstName + " " +user.lastName}
                        id={addPostStyles.detail}
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        id={addPostStyles.detail}
                      />
                    </div>
                  </div>
                  <ReactQuill className={addPostStyles.customQuill}/>
                </form>
                <div id={addPostStyles.buttons}>
                  <button id={addPostStyles.postB}>Add post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
