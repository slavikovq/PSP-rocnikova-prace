import "../../scss/Navbar.scss"
import logo from "../../assets/img/logo.png"
import user from "../../assets/icons/user.svg"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import { Navigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
      <Link to={"/"}><img src={logo} alt="logo" /></Link>
      </div>
      <div className="menu">
        <ul>
          <Link to={"/"}><li>Home</li></Link>
          <HashLink to={"/#About-Us"} ><li>About</li></HashLink>
          <HashLink to={"/#Product"}><li>Product</li></HashLink>
          <HashLink to={"/#Added-Value"}><li>Features</li></HashLink>
          <HashLink to={"/#Team"}><li>Team</li></HashLink>
          <Link to={"/sign-in"}><button><div>Sign In<img src={user} alt="" /></div></button></Link>
        </ul>
      </div>
    </nav>
    </>
  )
}
