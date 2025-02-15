import "../../scss/Features.scss";
import arrows from "../../assets/icons/arrows.png"
import plug from "../../assets/icons/plug.png"
import ruler from "../../assets/icons/ruler.png"

export default function Features() {
  return (
    <>
    <div id="Features">
      <div className="features">
        <div className="features-box">
            <h6>— features —</h6>
            <h1>Features</h1>
        </div>
        <div className="features-icons"> 
            <div className="features-icon">
                <img src={arrows} alt="" id="img-width"/>
                <h2>2.5 x 2.5mm</h2>
                <p>spot size</p>
            </div>
            <div className="features-icon">
            <img src={plug} alt="" id="img-height" />
                <h2>10 J</h2>
                <p>energy aprox</p>
            </div>
            <div className="features-icon">
            <img src={ruler} alt="" id="img-width" />
                <h2>1+ mm</h2>
                <p>depth affected</p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}
