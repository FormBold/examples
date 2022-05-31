import axios from "axios";
import React, { useState } from "react";
export default function Forms() {
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
      url: "https://formbold.com/s/unique_form_id",
      data: inputs,
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
      <button type="submit"> Send Message </button>
    </form>
  );
}
