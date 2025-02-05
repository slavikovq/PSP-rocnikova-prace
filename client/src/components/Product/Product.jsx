import "../../scss/Product.scss";
import wrench from "../../assets/icons/wrench.png";

export default function Product() {
  return (
    <>
        <section>

        </section>



      <div className="product">
        <div className="product-box">
          <h6>— product</h6>
          <h1>Plasma Shock Peening</h1>
          <p>
            The Controlled Energy Shockwave Generator (PSP) enhances metal
            components' fatigue life and reliability through shock peening.
            Unlike laser shock peening, PSP uses a controlled plasma burst to
            propel an impactor at high speeds (around 4 km/s), generating
            shockwaves that create beneficial compressive residual stresses on
            the material surface.
          </p>
          <p>
            This process strengthens metals against surface failures like
            fatigue, crack expansion, corrosion, and abrasion. PSP is
            cost-effective and can be integrated into manufacturing processes
            for improved quality. The device is controlled by an industrial
            robot to apply targeted spots on the material according to a CAM
            program.
          </p>
        </div>
        <div className="product-box">
            <div className="product-boxes">
                <div className="usage">
                    <div className="usage-box">
                        <div>
                            <img src={wrench} alt="" />
                            <h5>TURBINES & PUMPS</h5>
                        </div>
                    </div>
                    <div className="usage-box">
                        <div>
                            <img src={wrench} alt="" />
                            <h5>CASTING MOLDS</h5>
                        </div>
                    </div>
                </div>
                <div className="usage">
                    <div className="usage-box">
                        <div>
                            <img src={wrench} alt="" />
                            <h5>WELDS</h5>
                        </div>
                    </div>
                    <div className="usage-box">
                        <div>
                            <img src={wrench} alt="" />
                            <h5>MEDICAL DEVICES</h5>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
