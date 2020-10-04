import React from "react"
import styles from "../../css/form.module.css"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }
  render() {
    const { status } = this.state
    return (
      <div className={styles.mainBlock}>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xjvaolkb"
          method="POST"
        >
          <h1>Prijava za kurs</h1>
          <fieldset>
            <legend>
              <h3>Lični podaci</h3>
            </legend>
            <div className={styles.accountDetails}>
              <div>
                <label>Ime*</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Prezime*</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Email*</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Telefon*</label>
                <input type="text" name="name" required />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h3>Status</h3>
            </legend>
            <div className={styles.termsMailing}>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>Zaposlen/a</span>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>Ne zaposlen/a</span>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>Student</span>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>Srednjoškolac</span>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h3>Izaberite kurs</h3>
            </legend>
            <div className={styles.termsMailing}>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>2D i 3D dizajn</span>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>Razvoj mobilnih aplikacija / React Native</span>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>Primena metoda i alata mašinskog učenja</span>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" />
                <span>Web razvoj za apsolutne početnike</span>
              </div>
            </div>
          </fieldset>

          <button type="submit" href="/">
            Prijavi se
          </button>
        </form>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
