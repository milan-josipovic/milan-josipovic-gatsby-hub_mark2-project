import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import signin from "../../constants/signin"
import { Link } from "gatsby"
const SignIn = () => {
  return (
    <section className={styles.services}>
      {/* <Title title="naše" subtitle="usluge" /> */}
      <div className={styles.center}>
        {signin.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span className={styles.icon}>{item.icon}</span>
              <h4 className = {styles.text}>{item.title}</h4>
              <p className = {styles.text}>{item.text}</p>
              {/* <button type="button" className="btn-primary">
                <Link to={item.link}>{item.title}</Link>
              </button> */}
            </article>
          )
        })}
      </div>
      <div className={styles.signin}>
        <button type="button" className="btn-primary">
          Form
        </button>
      </div>
    </section>
  )
}

export default SignIn
