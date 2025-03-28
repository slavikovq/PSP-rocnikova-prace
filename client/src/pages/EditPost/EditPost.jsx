import editPostStyles from "../../scss/EditPost.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function EditPost() {
  const { user } = useAuth();

  return (
    <>
      <div className={editPostStyles.page}>
        <AdminBar />
        <div className={editPostStyles.edit}>
          <div className={editPostStyles.bg}>
            <div className={editPostStyles.form}>
              <div>
                <form>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter title..."
                      id={editPostStyles.title}
                    />
                  </div>

                  <div id={editPostStyles.details}>
                    <div>
                      <input
                        type="text"
                        defaultValue={user.firstName + " " +user.lastName}
                        id={editPostStyles.detail}
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        id={editPostStyles.detail}
                      />
                    </div>
                  </div>

                  <div id={editPostStyles.textarea}>
                    <textarea
                      type="text"
                      placeholder="Write your message..."
                      id={editPostStyles.content}
                      name="email"
                    />
                  </div>
                </form>
                <div id={editPostStyles.buttons}>
                  <button id={editPostStyles.postB}>Edit post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
