import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { Link } from "gatsby"

const Vesti = ({ news }) => {
  const { title, published, slug, image } = news
  let mainImage = image.fluid
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single news" />
        <Link fade className={styles.link} to={`/vesti/${slug}`}>
          detaljnije
        </Link>
      </div>
      <div className={styles.footer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.info}>
          <h5 className={styles.country}>{published}</h5>
        </div>
      </div>
    </article>
  )
}

export default Vesti
