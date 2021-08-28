import React, { useRef, useState } from "react";
import { ButtonLink as Button } from "../ButtonElement";
import "./ContactUs.css";
import MessageModal from "../MessageModal/MessageModal";

const ContactUs = () => {
  const nameRef = useRef("");
  const companynameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  //send a request to the contactUs API to send email
  async function sendMessage(client) {
    const response = await fetch(
      "https://portfolio-web-contact-me.herokuapp.com/contactus",
      {
        method: "POST",
        body: JSON.stringify(client),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    response.json().then((data) => setNotification(data.message));
  }

  //Handler to manage form submission
  const submitHandler = (e) => {
    e.preventDefault();

    const client = {
      name: nameRef.current.value,
      companyName: companynameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    if (client.name === "" || client.email === "" || client.message === "") {
      setError("Please enter the required(*) fields");
    } else {
      setError("");
      sendMessage(client);
    }
  };

  return (
    <>
      {notification && <MessageModal message={notification} />}
      <div className="contact-us">
        <h1>Contact Me</h1>
        <form onSubmit={submitHandler} id="contact-form" method="post">
          <div className="form-control">
            {<small>{error}</small>}
            <label>
              Name*
              <input
                type="text"
                name="name"
                maxlength="30"
                ref={nameRef}
                required={true}
              />
            </label>
            <label>
              Company Name
              <input
                type="text"
                name="companyname"
                maxlength="30"
                ref={companynameRef}
              />
            </label>
            <label>
              E-mail*
              <input type="email" name="email" ref={emailRef} required={true} />
            </label>
            <label>
              Message*
              <textarea
                form="contact-form"
                rows="7"
                name="message"
                ref={messageRef}
                required={true}
              />
            </label>
            <div className="button-wrap">
              <Button type="submit" to="/" onClick={submitHandler}>
                Submit
              </Button>
              <Button to="/">Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
