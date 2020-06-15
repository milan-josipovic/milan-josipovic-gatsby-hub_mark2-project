import React from "react"
import BlogCardNews from "./BlogCardNews"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getNewsPosts = graphql`
  query {
    newsposts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          slug
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
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

const BlogListNews = () => {
  const { newsposts } = useStaticQuery(getNewsPosts)

  return (
    <section className={styles.blog}>
      <div className={styles.center}>
        {newsposts.edges.map(({ node }) => {
          return <BlogCardNews key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogListNews
