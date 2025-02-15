import "../../scss/Product.scss";
import wrench from "../../assets/icons/wrench.png"
import note from "../../assets/icons/note.png"
import gear from "../../assets/icons/gear.png"
import tag from "../../assets/icons/tag.png";

export default function Product() {
  return (
    <>
    <div id="Product">
    <div className="product">
      <section className="services">
        <div className="services-box">
          <h6>— plasma peening —</h6>
          <h1>Services</h1>
          </div>
          <div className="services-cards">
            <div className="services-card">
              <div>
                <img src={gear} alt="" />
              </div>
              <h2>psp rental service</h2>
              <p>
                We offer equipment rentals for clients considering a purchase,
                handling temporary projects, or requiring confidentiality.
              </p>
            </div>
            <div className="services-card">
              <div>
                <img src={note} alt="" />
              </div>
              <h2>psp application service</h2>
              <p>
                At PSP Application Service, we provide high-quality PSP
                applications to enhance your components' performance and
                durability. Our process includes a pilot test to assess economic
                benefits and ensure optimal results.
              </p>
            </div>
            <div className="services-card">
              <div>
                <img src={tag} alt="" />
              </div>
              <h2>sale of psp equipment</h2>
              <p>
                We sell PSP equipment with technical support and employee
                training on PSP technology. Contact us to discuss your needs.
              </p>
            </div>
          </div>
      </section>
      <section className="product-section">
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
        </section>
      </div>
      </div>
    </>
  );
}
