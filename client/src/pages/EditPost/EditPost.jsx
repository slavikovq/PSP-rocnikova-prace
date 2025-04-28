import editPostStyles from "../../scss/EditPost.module.scss";
import AdminBar from "../../components/AdminBar/AdminBar";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { getPostById, updatePost } from "../../models/post";
import { alert } from "../../function/sweetalert";

export default function EditPost() {
  const { user } = useAuth();
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await getPostById(id);
      if (data.status === 500 || data.status === 404) {
        return setIsLoading(null);
      }

      if (data.status === 200 && user.role === "owner") {
        setPost(data.payload);
        setIsLoading(false);
      } else if (data.status === 200 && user._id === data.payload.creator) {
        setPost(data.payload);
        setIsLoading(false);
      } else {
        return navigate("/panel/post-list")
      }
    };
    load();
  }, []);

  const sendData = async () => {
    const res = await updatePost(id, formData);
    if (res.status === 200) {
      alert("success", "Your post has been successfully updated!");
    } else {
      alert("error", "Inputs cannot be empty!");
    }
  };

  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      creator: user._id,
    }));
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

  const handleContent = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  if (isLoading === null) {
    return <p>Post not found!</p>;
  }

  if (isLoading) {
    return <p>Post is loading!</p>;
  }

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
                      name="title"
                      id={editPostStyles.title}
                      onChange={handleInput}
                      defaultValue={post.title}
                    />
                  </div>
                  <ReactQuill
                    className={editPostStyles.customQuill}
                    onChange={handleContent}
                    defaultValue={post.content}
                  />
                </form>
                <div id={editPostStyles.buttons}>
                  <button id={editPostStyles.postB} onClick={handleButton}>
                    Edit post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
