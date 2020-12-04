import React from "react"
import info from "../../constants/info"
import styles from "../../css/info.module.css"

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}></div>
      <div className={styles.infoData}>
        {info.map((item, index) => {
          return (
            <div className={styles.infoItem} key={index}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <div className={styles.infoText}>{item.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Info
