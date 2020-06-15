import React from "react"
import Layout from "../components/Layout"
import Slide from "../components/Slide"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedNews from "../components/Home/FeaturedNews"
export default () => (
  <Layout>
    <Slide />
    <About />
    <Services />
    <FeaturedNews />
  </Layout>
)
