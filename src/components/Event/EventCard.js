import React from "react"
import styles from "../../css/event-card.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const EventCard = ({ event }) => {
  const { slug, title, img, date } = event
  return (
    <article className={styles.event}>
      <div className={styles.imgContainer}>
        <Image fluid={img.fluid} className={styles.img} alt="single post" />
        <Link fade className={styles.link} to={`/dogadjaji/${slug}`}>
          procitajte vise
        </Link>
        <h6 className={styles.date}>{date}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default EventCard
