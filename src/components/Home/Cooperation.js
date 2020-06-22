import React from "react"
import styles from "../../css/partnerlogos.module.css"
import Title from "../Title"
import cooperation from "../../constants/cooperation"

const Cooperation = () => {
  return (
    <section className={styles.partners}>
      <Title title="" subtitle="Saradnja" />
      <div className={styles.center}>
        {cooperation.map((item, index) => {
          return (
            <a href={item.href}>
              <article key={index} className={styles.partners}>
                <div className={styles.partnerCards}>{item.image}</div>
              </article>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Cooperation
