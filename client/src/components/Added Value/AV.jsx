import avStyles from "../../scss/AV.module.scss";
import flexibility from "../../assets/img/flexibility.png";
import efficiency from "../../assets/img/efficiency.png";
import LOC from "../../assets/img/low-operational-cost.png";

export default function AV() {
  return (
    <>
      <div id="Added-Value">
        <div className={avStyles.av}>
          <div className={avStyles.avTitle}>
            <h6>— features —</h6>
            <h1>Added Value</h1>
          </div>
          <div className={avStyles.avCards}>
            <div className={avStyles.avCard}>
              <div>
                <img src={flexibility} alt="Vygenerováno ChatGPT (OpenAI, 2025)" />
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
            <div className={avStyles.avCard}>
              <div>
                <img src={efficiency} alt="Vygenerováno ChatGPT (OpenAI, 2025)" />
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
            <div className={avStyles.avCard}>
              <div>
                <img src={LOC} alt="Vygenerováno ChatGPT (OpenAI, 2025)" />
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
      </div>
    </>
  );
}
