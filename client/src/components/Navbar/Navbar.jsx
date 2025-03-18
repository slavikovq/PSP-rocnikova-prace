import navbarStyles from "../../scss/Navbar.module.scss";
import logo from "../../assets/img/logo.png";
import userPfp from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../../context/AuthProvider";

export default function Navbar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <nav className={navbarStyles.navbar}>
        <div className={navbarStyles.logo}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={navbarStyles.menu}>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <HashLink to={"/#About-Us"}>
              <li>About</li>
            </HashLink>
            <HashLink to={"/#Product"}>
              <li>Product</li>
            </HashLink>
            <HashLink to={"/#Added-Value"}>
              <li>Features</li>
            </HashLink>
            <HashLink to={"/#Team"}>
              <li>Team</li>
            </HashLink>
            {user ? <Link to={"/panel"}><button><div>Profile<img src={userPfp} alt="" /></div></button></Link> : <Link to={"/sign-in"}><button><div>Sign In<img src={userPfp} alt="" /></div></button></Link>}
          </ul>
        </div>
      </nav>
    </>
  );
}
