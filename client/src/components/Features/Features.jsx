import featuresStyles from "../../scss/Features.module.scss";
import arrows from "../../assets/icons/arrows.png"
import plug from "../../assets/icons/plug.png"
import ruler from "../../assets/icons/ruler.png"

export default function Features() {
  return (
    <>
    <div id="Features">
      <div className={featuresStyles.features}>
        <div className={featuresStyles.featuresBox}>
            <h6>— features —</h6>
            <h1>Features</h1>
        </div>
        <div className={featuresStyles.featuresIcons}> 
            <div className={featuresStyles.featuresIcon}>
                <img src={arrows} alt="" id={featuresStyles.imgWidth}/>
                <h2>2.5 x 2.5mm</h2>
                <p>spot size</p>
            </div>
            <div className={featuresStyles.featuresIcon}>
            <img src={plug} alt="" />
                <h2>10 J</h2>
                <p>energy aprox</p>
            </div>
            <div className={featuresStyles.featuresIcon}>
            <img src={ruler} alt=""  id={featuresStyles.imgWidth}/>
                <h2>1+ mm</h2>
                <p>depth affected</p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}
