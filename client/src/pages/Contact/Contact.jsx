import Navbar from "../../components/Navbar/Navbar";
import contactStyles from "../../scss/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={contactStyles.contact}>
        <div className={contactStyles.contactBox}>
          <h6>—Contact</h6>
          <h1>Contact Us!</h1>
          <p>
            If you are interested, please reach out to us. We would be happy to
            discuss your specific needs with you.
          </p>

          <div className={contactStyles.contactInfo}>
            <p className={contactStyles.label}>Email:</p>
            <p>
              <a href="mailto:psptechnologies@seznam.cz">
                psptechnologies@seznam.cz
              </a>
            </p>
            <p className={contactStyles.label}>Location:</p>
            <div className={contactStyles.addressBlock}>
              <address className={contactStyles.address}>
                náměstí Míru 30
                <br />
                Mělník
                <br />
                276 01
                <br />
                Czechia
              </address>
            </div>

            <div className={contactStyles.socials}>
              <a
                href="https://cz.linkedin.com/company/psp-technologies-com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://cs.wikipedia.org/wiki/Plasma_Shock_Peening"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
