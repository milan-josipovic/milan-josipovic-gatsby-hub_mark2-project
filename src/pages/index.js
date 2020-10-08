import React from "react"
import Layout from "../components/Layout"
import Slide from "../components/Slide"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
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
    <FeaturedNews />

    {/* </section> */}

    {typeof window !== "undefined" && (
      <LeafletMap
        position={[43.853539, 19.855175]}
        zoom={16}
        markerText={"RIS Hub Užice "}
      />
    )}
    <PartnerLogos />
  </Layout>
)
