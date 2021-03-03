import React from "react"
import styles from "../../css/virtual-tour.module.css"
const VirtualTour = () => {
  return (
    <section>
      <h3 className={styles.title}>virtuelna tura</h3>
      <div>
      <iframe src="https://www.theasys.io/viewer/tOOU8LrzchPQEoDzMflIFRfzDr1Uza" allowfullscreen="true" 
      frameborder="0" scrolling="no" allow="vr;gyroscope;accelerometer" height="550" style={{width:"100%",border:"none"}}>
      </iframe>
      </div>
    </section>
  )
}

export default VirtualTour
