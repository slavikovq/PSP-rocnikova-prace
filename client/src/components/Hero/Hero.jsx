import Navbar from "../Navbar/Navbar"
import heroStyles from "../../scss/Hero.module.scss"
import { Link } from "react-router-dom"
import hero from "../../assets/img/hero-img.png"
import phone from "../../assets/icons/phone.svg"
import news from "../../assets/icons/news.png"


export default function Hero() {
  return (
    <>
      <Navbar />
      <div className={heroStyles.hero}>
        <div className={heroStyles.heroBox} id={heroStyles.hb1}>
          <h1>transforming <br /> surfaces with <br /> plasma peening</h1>
          <p>
            Plasma shock peening enhances material strength, durability, and
            fatigue resistance by using high-energy plasma pulses for advanced
            surface treatment
          </p>
          <div className={heroStyles.buttons}>
            <Link to={"/"}><button id={heroStyles.fullBtn}><img src={phone} alt="" />Contact</button></Link>
            <Link to={"/news"}><button id={heroStyles.clearBtn}><img src={news} alt="" />News</button></Link>
          </div>
        </div>
        <div className={heroStyles.heroBox} id={heroStyles.hb2}>
          <img src={hero} alt="" className={heroStyles.heroImg}/>
        </div>
      </div>
    </>
  );
}
