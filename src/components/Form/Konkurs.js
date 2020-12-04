import React from "react"
import Title from "../Title"
import styles from "../../css/konkurs.module.css"

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
      <section className={styles.concourse}>
        <div>
          <Title title="Konkurs" />
        </div>

        <div className={styles.container}>
          <div className={styles.text_box}>
            <p className={styles.text}>
              Startap centar Uzice u cilju razvoja inovativnog preduzetništva i
              podrške mladima u pokretanju sopstvenog biznisa raspisuje Javni
              poziv potencijalnim stanarima za korišćenje usluga i povezivanje.
            </p>
            <p className={styles.text}>
              Ukoliko imate tim koji razvija inovativnu ideju i planira da
              pokrene svoj startap ili već registrovano inovativno tehnološko
              preduzeće koje posluje manje od dve godine, prijavite se na
              konkurs i pridružite se zajednici Startap centra!
            </p>
            <p className={styles.text}>
              Selekcija stanara vrši se kroz tri koraka: najpre predselekcija na
              osnovu dostavljene dokumentacije, zatim sledi intervju sa
              prijavljenim kandidatima i na kraju konačna odluka na osnovu
              procesa ocenjivanja i obavljenog intervjua.
            </p>
            <p className={styles.text}>
              Selekcija stanara vrši se kroz tri koraka: najpre predselekcija na
              osnovu dostavljene dokumentacije, zatim sledi intervju sa
              prijavljenim kandidatima i na kraju konačna odluka na osnovu
              procesa ocenjivanja i obavljenog intervjua.
            </p>
            <p className={styles.text}>
              Selekcija stanara vrši se kroz tri koraka: najpre predselekcija na
              osnovu dostavljene dokumentacije, zatim sledi intervju sa
              prijavljenim kandidatima i na kraju konačna odluka na osnovu
              procesa ocenjivanja i obavljenog intervjua.
            </p>
            <p>
              Prijavljivanje se vrši popunjavanjem <b>kontakt forme.</b>
            </p>
          </div>

          <div className={styles.form_box}>
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/mgepynzw"
              method="POST"
              className={styles.form}
            >
              <div className={styles.form__top}>
                <label className={styles.form__title}>ime i prezime</label>
                <input type="text" name="ime" className={styles.form__input} />
              </div>
              <div className={styles.form__top}>
                <label className={styles.form__title}>Email</label>
                <input
                  type="text"
                  name="email"
                  className={styles.form__input}
                />
              </div>
              <div className={styles.form__top}>
                <label className={styles.form__title}>broj telefona</label>
                <input
                  type="text"
                  name="telefon"
                  className={styles.form__input}
                />
              </div>

              <div className={styles.form_option}>
                <div>
                  <h4 className={styles.heading}>Imate li startup ideju?</h4>
                </div>
                <div className="options">
                  <label htmlFor="Da">Da</label>
                  <input
                    className={styles.check}
                    type="radio"
                    name="startupIdeje"
                    id="startupIdeje"
                    value="da"
                  />
                  <label htmlFor="Ne">Ne</label>
                  <input
                    className={styles.check}
                    type="radio"
                    name="startupIdeje"
                    id="startupIdeje"
                    value="ne"
                  />
                </div>
              </div>

              <div className={styles.form__top}>
                <div>
                  <h4 className={styles.heading}>
                    Koja su tvoja znanja i veštine?
                  </h4>
                </div>
                <select name="vestine" className={styles.form_select} required>
                  <option></option>
                  <option value="Programiranje">Programiranje</option>
                  <option value="Dizajn">Dizajn</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Prodaja">Prodaja</option>
                  <option value="Biznis razvoj">Biznis razvoj</option>
                  <option value="Razvoj proizvoda">Razvoj proizvoda</option>
                </select>
              </div>

              <div className={styles.form__top}>
                <h4 className={styles.heading}>
                  Zašto želiš da se priključiš startapu? *
                </h4>
                <textarea
                  className={styles.form_text}
                  name="text"
                  cols="20"
                  rows="5"
                  required
                ></textarea>
              </div>

              {status === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <button className={styles.btn}>Posalji</button>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </section>
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
