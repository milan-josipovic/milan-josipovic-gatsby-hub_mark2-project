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
          <p className={styles.aboutText}>
            Regionalni inovacioni startup centar u Užicu (RIS centar) osnovan je
            uz pomoć „Programa podrške otvaranju regionalnih inovacionih startap
            centara“ kabineta ministra za inovacije i tehnološki razvoj u
            partnerstvu sa gradom Užicem i Akreditovanom regionalnom razvojnom
            agencijom „Zlatibor“ u cilju sistemske podrške inovacijama. Centar
            posluje kao deo mreže od 15 inovacionih centara formiranih u toku
            realizacije Programa.
          </p>
          <p className={styles.aboutText}>
            U okviru programa podrške preduzetnici će imati: stručnu, mentorsku,
            pravnu i savetodavnu podršku u razradi i komercijalizaciji poslovnih
            ideja i umrežavanju sa naučno-istraživačkim i obrazovnim
            institucijama.
          </p>
          <p className={styles.aboutText}>
            Centar pruža infrastrukturnu, upravljačku i tehničku podršku
            inovativnim idejama i novoosnovanim preduzećima, obezbeđujući im
            mogućnost da se razvijaju, povezuju sa akterima iz javnog, privatnog
            i civilnog sektora, kao i da pronadju i koriste različite vrste i
            izvore finansiranja.
          </p>
          <p className={styles.aboutText}>
            Cilj je da Zlatiborski okrug postane atraktivna lokacija za
            investicije zasnovane na znanju, inovacijama i informacionim
            tehnologijama u kојој se mladim I kreativnim ljudima pruža mogućnost
            i podrškа za započinjanje sopstvenog biznisa I pomaže u saradnji sa
            firmama iz zemlje i inostranstva.
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
