import React from "react"
import { navigateTo } from "gatsby-link"
import styles from "../../css/form.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Prijava extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   const form = e.target
  //   fetch("/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...this.state,
  //     }),
  //   })
  //     .then(() => navigateTo(form.getAttribute("action")))
  //     .catch(error => alert(error))
  // }

  render() {
    return (
      <div>
          <h1 style={{textAlign: "center"}}>
            Obaveštenje
          </h1>
          <h3>
            Zbog popunjenosti nismo u mogućnosti da primamo više polaznika.
          </h3>
      </div>
    )
  }
}


