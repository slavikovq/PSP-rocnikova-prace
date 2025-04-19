import footerStyles from "../../scss/Footer.module.scss"
import linkedin from "../../assets/icons/linked-in.png"
import CBIC from "../../assets/icons/CBIC.png"

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerInner}>
        <div className={footerStyles.footerBox}>
          <div className={footerStyles.address}>
            <p>náměstí Míru 30</p>
            <p>Mělník</p>
            <p>276 01</p>
            <p>Czechia</p>
          </div>

          <div className={footerStyles.centerBox}>
            <a
              href="https://cz.linkedin.com/company/psp-technologies-com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="LinkedIn - PSP Technologies" className={footerStyles.linkedin} />
            </a>
            <p>© 2025 PSP Technologies</p>
          </div>

          <div className={footerStyles.badgeBox}>
            <a
              href="https://s-ic.cz/en/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CBIC Certification"
            >
              <img src={CBIC} alt="CBIC Certification" className={footerStyles.CBIC} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
