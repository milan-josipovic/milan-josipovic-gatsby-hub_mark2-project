import React from "react"
import { navigateTo } from "gatsby-link"
import styles from "../../css/form.module.css"
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class NetlifyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className={styles.mainBlock}>
        <div className={styles.center}></div>

        <form
          name="prijava"
          method="post"
          action="/thanks/"
          data-netlify="true"
          // data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <h1>Prijava za kurs</h1>
          <fieldset>
            <legend>
              <h3 className={styles.mt3}>Lični podaci</h3>
            </legend>
            <div className={styles.accountDetails}>
              <div>
                <label>Ime*</label>
                <input
                  type="text"
                  name="Ime"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Prezime*</label>
                <input
                  type="text"
                  name="Prezime"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Email*</label>
                <input
                  type="text"
                  name="Email"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Telefon*</label>
                <input
                  type="text"
                  name="Telefon"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h3 className={styles.mt3}>Status</h3>
            </legend>
            <div className={styles.termsMailing}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="Zaposlen/a"
                  onChange={this.handleChange}
                />
                <span>Zaposlen/a</span>
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="Ne zaposlen/a"
                  onChange={this.handleChange}
                />
                <span>Ne zaposlen/a</span>
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="Student"
                  onChange={this.handleChange}
                />
                <span>Student</span>
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="Srednjoškolac"
                  onChange={this.handleChange}
                />
                <span>Srednjoškolac</span>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h3 className={styles.mt3}>Izaberite kurs</h3>
            </legend>
            <div className={styles.termsMailing}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="2D i 3D dizajn"
                  onChange={this.handleChange}
                />
                <span>2D i 3D dizajn</span>
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="Razvoj mobilnih aplikacija / React Native"
                  onChange={this.handleChange}
                />
                <span>Razvoj mobilnih aplikacija / React Native</span>
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="Primena metoda i alata mašinskog učenja"
                  onChange={this.handleChange}
                />
                <span>Primena metoda i alata mašinskog učenja</span>
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="Web razvoj za apsolutne početnike"
                  onChange={this.handleChange}
                />
                <span>Web razvoj za apsolutne početnike</span>
              </div>
            </div>
          </fieldset>

          <button className={styles.submitButton} type="submit">
            Prijavi se
          </button>
        </form>
      </div>
    )
  }
}
