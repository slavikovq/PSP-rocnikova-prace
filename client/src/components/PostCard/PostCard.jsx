import AdminBar from "../../components/AdminBar/AdminBar";
import postCardStyles from "../../scss/PostCard.module.scss";
import { useAuth } from "../../context/AuthProvider";
import edit from "../../assets/icons/edit.svg"
import trash from "../../assets/icons/trash.svg"
import { Link } from "react-router-dom";

export default function PostCard() {
  const { user } = useAuth();
  return (
    <>
      
            <div className={postCardStyles.card}>
              <div>
                <h1>Nadpis</h1>
                <p id={postCardStyles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  perferendis iste veritatis dolor esse voluptas adipisci rem!
                  Rem consequuntur velit architecto totam voluptatibus quisquam
                  enim reiciendis delectus facilis? Sunt, nemo maiores. Illum
                  harum in aliquam voluptates quaerat ea, optio architecto atque
                  pariatur laboriosam officiis aperiam? Soluta suscipit ipsam
                  molestias laborum?
                </p>
              </div>
              <div id={postCardStyles.details}>
                <p id={postCardStyles.detail}>{user.firstName + " " + user.lastName}</p>
                <p id={postCardStyles.detail}>28.03.2025</p>
              </div>
              <div id={postCardStyles.icons}>
                <Link to={"/panel/edit-post"}><img src={edit} alt="" className={postCardStyles.icon}/></Link>
                <Link to={"/"}><img src={trash} alt="" className={postCardStyles.icon}/></Link>
              </div>
            </div>

    </>
  );
}
