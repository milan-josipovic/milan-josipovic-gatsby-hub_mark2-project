import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"
import { Link } from "gatsby"
const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <button type="button" className="btn-primary">
                <Link to={item.link}>{item.title}</Link>
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
