import "../../scss/footer.scss"
import linkedin from "../../assets/icons/linked-in.png"
import CBIC from "../../assets/icons/CBIC.png"

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="footer-box">            
            <div>
                <p>náměstí Míru 30</p>
                <p>Mělník</p>
                <p>276 01</p>
                <p>Czechia</p>
            </div>
            <div>
                <img src={linkedin} alt="" id="linkedin"/>
                <p>© 2025 PSP Technologies</p>
            </div>
            <div>
                <img src={CBIC} alt="" id="CBIC" />
            </div>
        </div>
      </div>
    </>
  )
}
