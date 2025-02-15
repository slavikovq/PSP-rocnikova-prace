import "../../scss/About.scss"
import about from "../../assets/img/about-img.png"

export default function About() {
    return(
        <>
        <div id="About-Us">
            <div className="about">
                <div className="about-box">
                    <img src={about} alt="" />
                </div>
                <div className="about-box">
                    <h6>— plasma peening</h6>
                    <h1>About us</h1>
                    <p>PSP Technologies develops a pocket-size compact shock wave generator for plasma shock peening, an advanced surface engineering technique. </p>
                    <p>This process enhances surface residual stress, increases metal part durability, and creates denser, more compact surfaces. </p>
                    <p>PSP Technologies is a spin-off from the Institute of Thermomechanics, Academy of Sciences of the Czech Republic.</p>
                </div>
            </div>
            </div>
        </>
    )    
}