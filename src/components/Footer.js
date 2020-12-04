import React from "react"
import styles from "../css/footer.module.css"
import icons from "../constants/social-icons"
import { Link } from "gatsby"
import links from "../constants/links"
import "bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={styles.row}>
        <div class={styles.footer__container}>
          <div class={styles.footer__item}>
            <h4 class={styles.footer__heading}>O nama</h4>
            <p class={styles.footer__text}>
              Regionalni inovacioni startup centar u Užicu (RIS centar) osnovan
              je uz pomoć „Programa podrške otvaranju regionalnih inovacionih
              startap centara“ kabineta ministra za inovacije i tehnološki
              razvoj u partnerstvu sa gradom Užicem i Akreditovanom regionalnom
              razvojnom agencijom „Zlatibor“ u cilju sistemske podrške
              inovacijama. Centar posluje kao deo mreže od 15 inovacionih
              centara formiranih u toku realizacije Programa.
            </p>
          </div>
          <div class={styles.footer__item}>
            <h4 class={styles.footer__heading}>Navigacija</h4>
            <ul class={styles.footer__nav}>
              {links.map((link, index) => {
                return (
                  <li className={styles.footer__navItem} key={index}>
                    <Link to={link.path} className={styles.footer__link}>
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div class={styles.footer__item}>
            <div class={styles.footer__social}>
              {icons.map((icon, index) => {
                return (
                  <div className={styles.footer__iconBox}>
                    <a
                      key={index}
                      href={icon.url}
                      target="blank"
                      className={styles.footer__icon}
                    >
                      {icon.icon}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div class={styles.footer__copyright}>
        <p class={styles.footer__copyrightText}>
          Sva Prava Zadržana © Ris Hub Užice 2020
        </p>
      </div>
    </footer>
  )
}

export default Footer
