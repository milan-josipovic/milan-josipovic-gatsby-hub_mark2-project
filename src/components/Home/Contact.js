import React from "react"
import LeafletMap from "../../components/Map/LeafletMap"
import Info from "./Info"
import styles from "../../css/contact-info.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <LeafletMap
        position={[43.853539, 19.855175]}
        zoom={16}
        markerText={"RIS Hub Užice "}
      />
    </div>
  )
}

export default Contact
