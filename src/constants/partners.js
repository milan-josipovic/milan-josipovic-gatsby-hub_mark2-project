import React from "react"

export default [
  {
    image: (
      <a
        href="https://inovacije.gov.rs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../images/ministarstvoLogo2.png")}
          style={{ width: "100%" }}
        />
      </a>
    ),
  },
  {
    image: (
      <a href="https://uzice.rs/" target="_blank" rel="noopener noreferrer">
        <img src={require("../images/gradLogo.png")} style={{ width: "50%" }} />
      </a>
    ),
  },
  {
    image: (
      <a
        href="https://www.rrazlatibor.co.rs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("../images/rraLogo.jpg")} style={{ width: "50%" }} />
      </a>
    ),
  },
]
