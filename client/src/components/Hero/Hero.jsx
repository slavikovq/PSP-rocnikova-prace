import Navbar from "../Navbar/Navbar"
import "../../scss/Hero.scss"
import { Link } from "react-router-dom"
import hero from "../../assets/img/hero-img.png"
import phone from "../../assets/icons/phone.svg"
import news from "../../assets/icons/news.png"


export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-box" id="hb1">
          <h1>transforming <br /> surfaces with <br /> plasma peening</h1>
          <p>
            Plasma shock peening enhances material strength, durability, and
            fatigue resistance by using high-energy plasma pulses for advanced
            surface treatment
          </p>
          <div className="buttons">
            <Link to={"/"}><button id="full-btn"><img src={phone} alt="" />Contact</button></Link>
            <Link to={"/news"}><button id="clear-btn"><img src={news} alt="" />News</button></Link>
          </div>
        </div>
        <div className="hero-box" id="hb2">
          <img src={hero} alt="" className="hero-img"/>
        </div>
      </div>
    </>
  );
}
