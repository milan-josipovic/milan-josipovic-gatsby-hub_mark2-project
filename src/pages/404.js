import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"
import SEO from '../components/SEO'

export default function error() {
  return (
    <Layout>
      <SEO title="Error"/>
      <header className={styles.error}>
        <Banner title="error page">
          <Link to="/" className="btn-white">
            natrag na početnu stranicu
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
