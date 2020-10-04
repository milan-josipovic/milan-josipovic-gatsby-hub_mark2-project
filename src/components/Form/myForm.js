import React from "react"

const myForm = () => {
  return (
    <div>
      <form
        // name="contactForm"
        method="POST"
        // action="/form"
        // data-netlify-honeypot="bot-field"
        data-netlify="true"
        // id="contact-form"
        // className="contact-form"
      >
        <div className="banner">
          <h1>Volunteer Signup</h1>
        </div>
        <br />
        <p>
          The HELP Group is seeking volunteers to serve our community. Fill in
          the information below to indicate how you would like to become
          involved.
        </p>
        <br />
        <div className="colums">
          <div className="item">
            <label for="name">
              Name<span>*</span>
            </label>
            <input id="name" type="text" name="name" required />
          </div>
          <div className="item">
            <label for="eaddress">
              Email Address<span>*</span>
            </label>
            <input id="eaddress" type="text" name="eaddress" required />
          </div>
          <div className="item">
            <label for="phone">
              Phone<span>*</span>
            </label>
            <input id="phone" type="tel" name="phone" required />
          </div>
        </div>
        <div>
          <input type="checkbox" name="vehicle1" value="Zaposlen" />
          <label for="vehicle1">Zaposlen</label>
          <br />
          <input type="checkbox" name="vehicle2" value="Ne zaposlen" />
          <label for="vehicle2">Ne zaposlen</label>
          <br />
          <input type="checkbox" name="vehicle3" value="Student" />
          <label for="vehicle3">Student</label>
          <br />
          <input type="checkbox" name="vehicle3" value="Srednjoskolac" />
          <label for="vehicle3">Srednjoskolac</label>
          <br />
          <br />
        </div>

        <div className="btn-block">
          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default myForm
