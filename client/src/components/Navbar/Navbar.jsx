import "../../scss/Navbar.scss"
import logo from "../../assets/img/logo.png"
import user from "../../assets/icons/user.svg"
import { Link } from "react-router-dom"

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
          <li>About</li>
          <li>Product</li>
          <li>Features</li>
          <li>Team</li>
          <Link to={"/sign-in"}><button><div>Sign-In<img src={user} alt="" /></div></button></Link>
        </ul>
      </div>
    </nav>
    </>
  )
}
