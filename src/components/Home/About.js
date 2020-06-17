import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/usluge.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "usluge.jpg" }) {
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
            Regionalni inovacioni startup centar u Užicu (RIS centar) osnovan je
            s ciljem uspostavljanja saradnje i uvezivanjem sa privredom, naukom,
            istraživačkim sektorom i visokoškolskim institucijama.
          </p>
          <p>
            Centar pruža infrastrukturnu, upravljačku i tehničku podršku
            inovativnim idejama i novoosnovanim preduzećima, obezbeđujući im
            mogućnost da se razvijaju, rastu, povezuju sa akterima iz javnog,
            privatnog i civilnog sektora, kao i da identifikuje potencijalne
            izvore finansiranja.
          </p>
          <p>
            Kako je Zlatiborski okrug atraktivna lokacija za investicije
            zasnovane na znanju, inovacijamai i informacionim tehnologijama u
            kome se mladim, obrazovnim I kreativnim ljudima pruža mogućnost i
            podršku za počinjanje sopstvenog biznisa I saradnju sa firmama iz
            zemlje i inostranstva.
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
