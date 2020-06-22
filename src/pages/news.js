import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import BlogList from "../components/Blog/BlogList"

import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const news = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default news
