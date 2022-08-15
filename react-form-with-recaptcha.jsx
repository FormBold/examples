import React, { useState } from "react";
import axios from "axios";
// Install dependency - npm install react-google-recaptcha
import ReCAPTCHA from "react-google-recaptcha";

export default function Forms() {
    const recaptchaRef = React.createRef();

    // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://formbold.com/s/FORM_ID",
      data: {...inputs, 'g-recaptcha-response': recaptchaRef.current.getValue()},
    })
      .then((r) => {
        console.log("hello");
      })
      .catch((r) => {
        console.log("error");
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        onChange={handleOnChange}
        value={inputs.email}
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
      />
      <textarea
        onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
        placeholder="Type your message"
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        // Insert reCAPTCHA site key here
        sitekey="your recaptcha site key"
      />
      <button type="submit"> Send Message </button>
    </form>
  );
}
