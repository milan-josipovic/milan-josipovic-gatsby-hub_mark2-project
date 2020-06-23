import React from "react"
import styles from "../../css/partnerlogos.module.css"
import Title from "../Title"
import team from "../../constants/team"

const Team = () => {
  return (
    <section className={styles.partners}>
      <Title title="naš" subtitle="tim" />
      <div className={styles.center}>
        {team.map((item, index) => {
          return (
            <a href={item.href}>
              <article key={index} className={styles.partners}>
                <div className={styles.partnerCards}>{item.image}</div>
                <div className={styles.info}>{item.text}</div>
              </article>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Team
