import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/usluge.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "usluge1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="o" subtitle="nama" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about society" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <p>
            Regionalni inovacioni startup centar u Užicu osnovan je s ciljem
            uspostavljanja saradnje i uvezivanjem sa privredom, naukom,
            istraživačkim sektorom i visokoškolskim institucijama.
          </p>
          <p>
            Centar pruža infrastrukturnu, upravljačku i tehničku podršku
            inovativnim idejama i novoosnovanim preduzećima.
          </p>

          <p>
            Osnovan je kao zajednička inicijativa kabineta ministra za inovacije
            i tehnološki razvoj, Grada Užica i regionalne razvojne agencije
            Zlatibor .
          </p>

          <button type="button" className="btn-primary">
            <Link to="services">procitajte vise</Link>
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
