import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import PartnerLogos from "../components/Home/PartnerLogos"
import styles from "../css/about.module.css"
import Cooperation from "../components/Home/Cooperation"
import SignIn from "../components/Home/SignIn"
import Team from "../components/Home/Team"
import SEO from "../components/SEO"
import ServicesV2 from "../components/Home/ServicesV2"
import Title from "../components/Title"

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="O nama" />
      <StyledHero img={data.aboutUsBcg.childImageSharp.fluid} />
      <section className={styles.sectionAbout}>
        <div className={styles.center}>
          <Title title="O nama" />
          <article className={styles.aboutInfo}>
            <p className={styles.aboutText}>
              Regionalni inovacioni startup centar u Užicu (RIS centar) osnovan
              je uz pomoć „Programa podrške otvaranju regionalnih inovacionih
              startap centara“ kabineta ministra za inovacije i tehnološki
              razvoj u partnerstvu sa gradom Užicem i Akreditovanom regionalnom
              razvojnom agencijom „Zlatibor“ u cilju sistemske podrške
              inovacijama. Centar posluje kao deo mreže od 15 inovacionih
              centara formiranih u toku realizacije Programa.
            </p>
            <p className={styles.aboutText}>
              U okviru programa podrške preduzetnici će imati: stručnu,
              mentorsku, pravnu i savetodavnu podršku u razradi i
              komercijalizaciji poslovnih ideja i umrežavanju sa
              naučno-istraživačkim i obrazovnim institucijama.
            </p>
            <p className={styles.aboutText}>
              Centar pruža infrastrukturnu, upravljačku i tehničku podršku
              inovativnim idejama i novoosnovanim preduzećima, obezbeđujući im
              mogućnost da se razvijaju, povezuju sa akterima iz javnog,
              privatnog i civilnog sektora, kao i da pronadju i koriste
              različite vrste i izvore finansiranja.
            </p>
            <p className={styles.aboutText}>
              Cilj je da Zlatiborski okrug postane atraktivna lokacija za
              investicije zasnovane na znanju, inovacijama i informacionim
              tehnologijama u kојој se mladim I kreativnim ljudima pruža
              mogućnost i podrškа za započinjanje sopstvenog biznisa I pomaže u
              saradnji sa firmama iz zemlje i inostranstva.
            </p>
          </article>
        </div>
      </section>
      {/* <SignIn /> */}
      <ServicesV2 />
      {/* <Cooperation /> */}
      {/* <Team /> */}
      <PartnerLogos />
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutUsBcg: file(relativePath: { eq: "aboutUsBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default about
