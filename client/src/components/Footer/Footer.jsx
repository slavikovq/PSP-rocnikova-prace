import footerStyles from "../../scss/Footer.module.scss"
import linkedin from "../../assets/icons/linked-in.png"
import CBIC from "../../assets/icons/CBIC.png"

export default function Footer() {
  return (
    <>
      <div className={footerStyles.footer}>
        <div className={footerStyles.footerBox}>            
            <div>
                <p>náměstí Míru 30</p>
                <p>Mělník</p>
                <p>276 01</p>
                <p>Czechia</p>
            </div>
            <div>
                <img src={linkedin} alt="" id={footerStyles.linkedin}/>
                <p>© 2025 PSP Technologies</p>
            </div>
            <div>
                <img src={CBIC} alt="" id={footerStyles.CBIC} />
            </div>
        </div>
      </div>
    </>
  )
}
