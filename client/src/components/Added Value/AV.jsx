import "../../scss/AV.scss";
import flexibility from "../../assets/img/flexibility.png";
import efficiency from "../../assets/img/efficiency.png";
import LOC from "../../assets/img/low-operational-cost.png";

export default function AV() {
  return (
    <>
      <div className="AV">
        <div className="AV-title">
            <h6>— features —</h6>
            <h1>Added Value</h1>
        </div>
        <div className="AV-cards">
          <div className="AV-card">
            <div>
                <img src={flexibility} alt="" />
                <h2>flexibility</h2>
            </div>
            <div>
              <p>
                PSP technology allows hardening of internal and hard-to-reach
                areas without needing direct optical access, operating
                effectively in dry, real-world conditions
              </p>
            </div>
          </div>
          <div className="AV-card">
            <div>
                <img src={efficiency} alt="" />
                <h2>efficiency</h2>
            </div>
            <div>
              <p>
                Adjusting surface tension significantly extends product
                lifespan, matching Laser Shock Peening results and potentially
                increasing longevity by hundreds of percent.
              </p>
            </div>
          </div>
          <div className="AV-card">
            <div>
                <img src={LOC} alt="" />
                <h2>low operational cost</h2>
            </div>
            <div>
              <p>
                PSP technology enhances production quality at a relatively low
                cost, with operational expenses significantly lower than laser
                shock peening. Its pricing makes it accessible to high-,
                medium-, and low-tech industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
