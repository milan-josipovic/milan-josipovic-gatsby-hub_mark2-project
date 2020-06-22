import React from "react"
import Layout from "../components/Layout"

import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

import PartnerLogos from "../components/Home/PartnerLogos"

const about = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.aboutUsBcg.childImageSharp.fluid} />
      <div></div>
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
