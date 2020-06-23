import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../css/slide.module.css"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight} from "react-icons/fa";

function Slide() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  console.log(index)
  console.log(length)
  return (
    <div className={styles.container}>
      <Img
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, " ").substring(2)}
        className={styles.img}
      />

      <button onClick={() => handlePrevious()} className={styles.prev}>
        <FaChevronLeft size={35} className={styles.arrowLeft}/>
      </button>
      <button onClick={() => handleNext()} className={styles.next}>
        <FaChevronRight size={35} className={styles.arrowRight}/>
      </button>
    </div>
  )
}

export default Slide
