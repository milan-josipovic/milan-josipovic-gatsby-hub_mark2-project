import React from "react"
import EventCard from "./EventCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/event.module.css"

const getEvents = graphql`
  query {
    events: allContentfulEvent(sort: { order: DESC, fields: date }) {
      nodes {
        title
        author
        date
        id: contentful_id
        slug
        img {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const EventList = () => {
  const { events } = useStaticQuery(getEvents)

  return (
    <section className={styles.event}>
      <Title title="svi" subtitle="dogadjaji" />
      <div className={styles.center}>
        {events.nodes.map(event => {
          return <EventCard key={event.id} event={event} />
        })}
      </div>
    </section>
  )
}

export default EventList
