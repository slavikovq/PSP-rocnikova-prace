import teamStyles from "../../scss/Team.module.scss";
import circle from "../../assets/team-photos/circle.png";
import slavik from "../../assets/team-photos/slavik.png";
import bajer from "../../assets/team-photos/bajer.png";
import kadlec from "../../assets/team-photos/kadlec.png";
import lukacevic from "../../assets/team-photos/lukacevic.png";
import prochazka from "../../assets/team-photos/prochazka.png";
import sonsky from "../../assets/team-photos/sonsky.png";
import stedina from "../../assets/team-photos/stedina.png";
import plesek from "../../assets/team-photos/plesek.png";

export default function Team() {
  return (
    <>
    <div id="Team">

      <div className={teamStyles.team}>
      <div className={teamStyles.teamTitle}>
        <h6>— Team —</h6>
        <h1>Meet the team</h1>
      </div>
        <div className={teamStyles.teamCards}>
        <div className={teamStyles.teamRow}>
          <div className={teamStyles.personCard}>
            <div>
              <img src={slavik} alt="" />
            </div>
            <div>
              <h2>Tomáš Slavík</h2>
              <p>CEO & CTO</p>
            </div>
          </div>
          <div className={teamStyles.personCard}>
            <div>
              <img src={prochazka} alt="" />
            </div>
            <div>
              <h2>Hynek Procházka</h2>
              <p>CTO</p>
            </div>
          </div>
          <div className={teamStyles.personCard}>
            <div>
              <img src={kadlec} alt="" />
            </div>
            <div>
              <h2>Vojtěch Kadlec</h2>
              <p>Co-founder</p>
            </div>
          </div>
          <div className={teamStyles.personCard}>
            <div>
              <img src={stedina} alt="" />
            </div>
            <div>
              <h2>Jakub Stedina</h2>
              <p>Designer</p>
            </div>
          </div>
        </div>
        <div className={teamStyles.teamRow}>
        <div className={teamStyles.personCard}>
            <div>
              <img src={sonsky} alt="" />
            </div>
            <div>
              <h2>Jiří Šonský</h2>
              <p>Advisor, Originator</p>
            </div>
          </div>
          <div className={teamStyles.personCard}>
            <div>
              <img src={bajer} alt="" />
            </div>
            <div>
              <h2>Jan Bajer</h2>
              <p>Advisor, LSP expert</p>
            </div>
          </div>
          <div className={teamStyles.personCard}>
            <div>
              <img src={plesek} alt="" />
            </div>
            <div>
              <h2>Jiří Plešek</h2>
              <p>Advisor, Membert of the board
              of Czech Academy of Science</p>
            </div>
          </div>
          <div className={teamStyles.personCard}>
            <div>
              <img src={lukacevic} alt="" />
            </div>
            <div>
              <h2>Jan Lukačevič</h2>
              <p>Adisor, Space engineer</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
