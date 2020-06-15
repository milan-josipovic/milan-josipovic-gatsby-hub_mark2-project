import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Blog = ({ data }) => {
  const {
    title,
    author,
    published,
    text: { json },
  } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <img width="400" src={node.data.target.fields.file["en-US"].url} />
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Autor : {author}</h4>
          <h4>Objavljeno : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <Link to="/news" className="btn-primary">
            svi postovi
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      author
      published(formatString: "DD. MM. YYYY")
      text {
        json
      }
    }
  }
`

export default Blog
