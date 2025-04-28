import AdminBar from "../../components/AdminBar/AdminBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import addPostStyles from "../../scss/AddPost.module.scss";
import { createPost } from "../../models/post";
import { useState } from "react";
import { alert } from "../../function/sweetalert";


export default function AddPost() {
  const { user } = useAuth();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();


  const sendData = async () => {
    const res = await createPost(formData);
    if (res.status === 201) {
      alert("success", "Your post has been successfully published!");
      return navigate("/panel/post-list")
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
    if(!formData.content || !formData.title){
      alert("error", "Inputs cannot be empty!")
      return
    }
    sendData();
  };

  const handleContent = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

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
                      onChange={handleInput}
                      placeholder="Enter title..."
                      name="title"
                      id={addPostStyles.title}
                      
                    />
                  </div>
                  <ReactQuill
                    className={addPostStyles.customQuill}
                    onChange={handleContent}
                    
                  />
                </form>
                <div id={addPostStyles.buttons}>
                  <button id={addPostStyles.postB} onClick={handleButton}>
                    Add post
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
