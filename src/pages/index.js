import React from "react"
import Layout from "../components/Layout"
import Slide from "../components/Slide"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Contact from "../components/Home/Contact"
import Konkurs from "../components/Form/Konkurs"
import FeaturedNews from "../components/Home/FeaturedNews"
import Survey from "../components/Home/Survey"
import LeafletMap from "../components/Map/LeafletMap"
import PartnerLogos from "../components/Home/PartnerLogos"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Početna" />
    {/* <section style={{ margin: "0.5rem 1rem" }}> */}
    <Slide />
    {/* <Survey /> */}
    <About />
    <Services />
    <Konkurs />
    <FeaturedNews />

    {/* </section> */}

    <Contact />
    <PartnerLogos />
  </Layout>
)
