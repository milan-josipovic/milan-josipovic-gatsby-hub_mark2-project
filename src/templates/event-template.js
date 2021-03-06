import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-event.module.css"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaChevronDown } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import { FaClone } from "react-icons/fa"
import { FaFilePdf } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import { FaFileWord } from "react-icons/fa"
import SEO from "../components/SEO"

const Event = ({ data }) => {
  const {
    title,
    date,
    author,
    description: { json },
  } = data.event

  const [showDocument, setShowDocument] = React.useState("")
  const showHideDocument = id => {
    if (showDocument == id) {
      id = ""
    }
    setShowDocument(showDocument => id)
  }
  console.log(showDocument)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        //Image
        if (
          node.data.target.fields.file["en-US"].contentType === "image/jpeg"
        ) {
          return (
            <div className={styles.image}>
              <img
                width="490"
                src={node.data.target.fields.file["en-US"].url}
              />
            </div>
          )
        }
        //PDF
        else if (
          node.data.target.fields.file["en-US"].contentType ===
          "application/pdf"
        ) {
          const documentUrl = node.data.target.fields.file["en-US"].url
          return (
            <div className={styles.document}>
              <div className={styles.documentControls}>
                <FaFilePdf size={35} className={styles.pdfIcon} />
                <p className={styles.documentName}>
                  {node.data.target.fields.title["en-US"]}
                </p>
                <button
                  type="button"
                  className={styles.roundedButton}
                  onClick={() => showHideDocument(documentUrl)}
                >
                  {showDocument == documentUrl ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <button type="button" className={styles.roundedButton}>
                  <a
                    className={styles.documentButton}
                    href={documentUrl}
                    target="_blank"
                  >
                    <FaClone />
                  </a>
                </button>
              </div>
              <div
                className={
                  showDocument == documentUrl
                    ? `${styles.documentWindow}`
                    : `${styles.documentWindowHidden}`
                }
              >
                <object
                  className={styles.objectPdf}
                  data={documentUrl}
                  type="application/pdf"
                ></object>
              </div>
            </div>
          )
        } else if (
          node.data.target.fields.file["en-US"].contentType ===
          "application/octet-stream"
        ) {
          const documentUrl = node.data.target.fields.file["en-US"].url
          return (
            <div className={styles.document}>
              <div className={styles.documentControls}>
                <FaFileWord size={35} className={styles.wordIcon} />
                <p className={styles.documentName}>
                  {node.data.target.fields.title["en-US"]}
                </p>
                <button type="button" className={styles.roundedButton}>
                  <a className={styles.documentButton} href={documentUrl}>
                    <FaDownload />
                  </a>
                </button>
              </div>
            </div>
          )
        }
      },
    },
  }
  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.published}>Autor : {author}</p>
          <p className={styles.published}>Objavljeno : {date}</p>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <div className={styles.allBlogsButton}>
            <Link to="/dogadjaji" className="btn-primary">
              svi dogadjaji
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    event: contentfulEvent(slug: { eq: $slug }) {
      title
      slug
      date
      author
      description {
        json
      }
    }
  }
`

export default Event
