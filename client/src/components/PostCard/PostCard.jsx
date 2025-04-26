import postCardStyles from "../../scss/PostCard.module.scss";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/trash.svg";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { getUserById } from "../../models/user";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { alert } from "../../function/sweetalert";
import { deletePost } from "../../models/post";

export default function PostCard({ title, creator, dateCreated, content, id }) {
  const [creatorName, setCreatorName] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await getUserById(creator);
      if (res.status === 404) {
        setCreatorName(null);
        setIsLoading(false);
        return;
      }
      if (res.status === 200) {
        const name = `${res.payload.firstName} ${res.payload.lastName}`;
        setIsLoading(false);
        setCreatorName(name);
      }
    };
    load();
  }, []);

  const convertDate = () => {
    const date = new Date(dateCreated);
    return date.toLocaleDateString("cs-CZ");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const Alert = Swal.mixin({
      buttonsStyling: true,
    });
    Alert.fire({
      title: "Are you sure you want to delete this post?",
      icon: "warning",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      color: "white",
      background: "#0E0C13",
      confirmButtonColor: "#cfab4e",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#cfab4e",
      customClass: {
        confirmButton: postCardStyles.swalButton,
        cancelButton: postCardStyles.swalButton,
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await deletePost(id);
        if (data.status === 200) {
          alert("success", "Post was deleted!");
          window.location.reload();
          return;
        }
      }
    });
  };

  return (
    <>
      <div className={postCardStyles.card}>
        <div>
          <h1>{title}</h1>
          <div
            id={postCardStyles.content}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          />
        </div>
        <div id={postCardStyles.details}>
          <p id={postCardStyles.detail}>{creatorName ?? "Deleted user"}</p>
          <p id={postCardStyles.detail}>{convertDate()}</p>
        </div>
        <div id={postCardStyles.icons}>
          <Link to={`/panel/edit-post/${id}`}>
            <img src={edit} alt="" className={postCardStyles.icon} />
          </Link>
          <Link>
            <img
              src={trash}
              alt=""
              onClick={(e) => handleDelete(e, id)}
              className={postCardStyles.icon}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
