import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"
import { Link } from "gatsby"
import { withTheme } from "styled-components"
const Services = () => {
  return (
    <section className={styles.services}>     
      <h3 className = {styles.title}>naše usluge</h3>
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span className={styles.icon}>{item.icon}</span>
              <h4 className = {styles.text}>{item.title}</h4>
              <p className = {styles.text}>{item.text}</p>
              <button type="button" className={`btn-primary ${styles.button}`}>
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
