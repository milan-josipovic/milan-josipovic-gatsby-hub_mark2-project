import React from "react"
import { navigateTo } from "gatsby-link"
import styles from "../../css/form.module.css"
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Prijava extends React.Component {
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
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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
      <div className="main-block">
        <h1>Prijava</h1>
        <form
          name="prijava"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
          <h3>Lični podaci</h3>
          <label id="icon" for="name"></label>
          <input
            type="text"
            name="Ime"
            id="name"
            placeholder="Ime"
            required
            onChange={this.handleChange}
          />
          <label id="icon" for="Ime"></label>

          <label id="icon" for="prezime"></label>
          <input
            type="text"
            name="Ime"
            id="prezime"
            placeholder="Prezime"
            required
            onChange={this.handleChange}
          />
          <label id="icon" for="Ime"></label>

          <input
            type="text"
            name="adresa"
            id="name"
            placeholder="Adresa"
            required
            onChange={this.handleChange}
          />
          <label id="icon" for="telefon"></label>
          <input
            type="text"
            name="telefon"
            id="name"
            placeholder="Telefon"
            required
            onChange={this.handleChange}
          />

          <div className={styles.gender}>
            <h3>Status</h3>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Zaposlen/a"
                name="Zaposlen/a"
                onChange={this.handleChange}
              />
              <label for="Zaposlen/a" className={styles.radio}>
                Zaposlen/a
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Ne zaposlen/a"
                name="Ne zaposlen/a"
                onChange={this.handleChange}
              />
              <label for="Ne zaposlen/a" className={styles.radio}>
                Ne zaposlen/a
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Student"
                name="Student"
                onChange={this.handleChange}
              />
              <label for="Student" className={styles.radio}>
                Student
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Srednjoškolac"
                name="Srednjoškolac"
                onChange={this.handleChange}
              />
              <label for="Srednjoškolac" className={styles.radio}>
                Srednjoškolac
              </label>
            </p>
          </div>
          {/* ----------------------- */}
          <div className={styles.gender}>
            <h3>Izaberite kurseve</h3>
            <p>
              <input
                type="checkbox"
                value="none"
                id="2D i 3D dizajn"
                name="2D i 3D dizajn"
                onChange={this.handleChange}
              />
              <label for="2D i 3D dizajn" className={styles.radio}>
                2D i 3D dizajn
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Razvoj mobilnih aplikacija / React Native"
                name="Razvoj mobilnih aplikacija / React Native"
                onChange={this.handleChange}
              />
              <label
                for="Razvoj mobilnih aplikacija / React Native"
                className={styles.radio}
              >
                Razvoj mobilnih aplikacija / React Native
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Primena metoda i alata mašinskog učenja
"
                name="Primena metoda i alata mašinskog učenja
"
                onChange={this.handleChange}
              />
              <label
                for="Primena metoda i alata mašinskog učenja
"
                className={styles.radio}
              >
                Primena metoda i alata mašinskog učenja
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Web razvoj za apsolutne početnike"
                name="Web razvoj za apsolutne početnike"
                onChange={this.handleChange}
              />
              <label
                for="Web razvoj za apsolutne početnike"
                className={styles.radio}
              >
                Web razvoj za apsolutne početnike
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Razvijanje video igara za početnike / Unity
"
                name="Razvijanje video igara za početnike / Unity
"
                onChange={this.handleChange}
              />
              <label
                for="Razvijanje video igara za početnike / Unity
"
                className={styles.radio}
              >
                Razvijanje video igara za početnike / Unity
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                value="none"
                id="Marketing na društvenim mrežama
"
                name="Marketing na društvenim mrežama
"
                onChange={this.handleChange}
              />
              <label
                for="Marketing na društvenim mrežama
"
                className={styles.radio}
              >
                Marketing na društvenim mrežama
              </label>
            </p>
          </div>

          {/* ----------------------- */}

          {/* <div className="gender"></div> */}
          <div className={styles.btnBlock}>
            <button className={styles.submitButton} type="submit">
              Prijavi se
            </button>
          </div>
        </form>
      </div>
    )
  }
}
