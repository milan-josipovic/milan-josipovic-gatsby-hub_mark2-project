import React from 'react'
import styles from "../../css/servicesV2.module.css"
import Title from "../Title"
import servicesV2 from '../../constants/servicesV2'

const ServicesV2 = () => {
 return (
  <section className={styles.partners}>
      <Title title="" subtitle="Naše usluge" />
      <div className={styles.center}>
        {servicesV2.map((item, index) => {
          return (
            <a href={item.href}>
              <article key={index} className={styles.partners}>
                <div className={styles.partnerCards}>{item.image}</div>
                {/* <div className={styles.partnerCards}>{item.info}</div> */}
              </article>
            </a>
          )
        })}
      </div>
    </section>
 )
}

export default ServicesV2
