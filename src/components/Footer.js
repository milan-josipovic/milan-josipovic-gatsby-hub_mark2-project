import React from "react"
import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"
import "bootstrap/dist/css/bootstrap.min.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.contact}>
        <i class="fa fa-phone"></i>
        <p >+381 31 523 065</p>
      </div>
      <div className={styles.contact}>
        <i class="fa fa-envelope"></i>
        <p>
          <a href="mailto:office@rrazlatibor.co.rs">office@rrazlatibor.rs</a>
        </p>
      </div>
      <div className={styles.copyright}>
        Sva prava zadržana &copy; ris hub Užice {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
