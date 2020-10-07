import React from "react"
import Vesti from "../News/Vesti"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import { Link } from "gatsby"
const getNews = graphql`
  query {
    featuredNews: allContentfulPost(
      sort: { fields: published, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          id: contentful_id
          published(formatString: "DD. MM. YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedNews = () => {
  const response = useStaticQuery(getNews)
  const news = response.featuredNews.edges
  return (
    <section className={styles.tours}>
      <Title title="poslednje" subtitle="vesti" />
      <div className={styles.center}>
        {news.map(({ node }) => {
          return <Vesti key={node.contentful_id} news={node} />
        })}
      </div>
      <Link fade to="/vesti" className="btn-primary">
        sve vesti
      </Link>
    </section>
  )
}

export default FeaturedNews
