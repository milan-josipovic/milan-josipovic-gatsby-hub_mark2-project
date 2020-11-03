import React from "react"
import Layout from "../components/Layout"
import EventList from "../components/Event/EventList"
import SEO from "../components/SEO"

const dogadjaji = () => {
  return (
    <Layout>
      <SEO title="Dogadjaji" />
      <EventList />
    </Layout>
  )
}

export default dogadjaji
