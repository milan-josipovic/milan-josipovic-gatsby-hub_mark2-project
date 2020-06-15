import React from "react"
import Layout from "../components/Layout"
import Slide from "../components/Slide"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedNews from "../components/Home/FeaturedNews"

import LeafletMap from "../components/Map/LeafletMap"

export default () => (
  <Layout>
    {/* <section style={{ margin: "0.5rem 1rem" }}> */}
    <Slide />
    <About />
    <Services />
    <FeaturedNews />
    {/* </section> */}

    {typeof window !== "undefined" && (
      <LeafletMap
        position={[43.853539, 19.855175]}
        zoom={16}
        markerText={"RIS Hub Užice"}
      />
    )}
  </Layout>
)
