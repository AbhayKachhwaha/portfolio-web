import React from "react";
import "./ContactUs.css";
import { ButtonLink as Button } from "../ButtonElement";

const ContactUs = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us">
      <h1>Contact Me</h1>
      <form onSubmit={submitHandler} id="contact-form">
        <div className="form-control">
          <label>
            Name
            <input type="text" name="name" maxlength="30" />
          </label>
          <label>
            Company Name
            <input type="text" name="companyname" maxlength="30" />
          </label>
          <label>
            E-mail
            <input type="email" name="email" />
          </label>
          <label>
            Project Description
            {/* <input type="text" name="project" maxlength="500" /> */}
            <textarea form="contact-form" rows="7" name="description" />
          </label>
          <div className="button-wrap">
              <Button type="submit" to="#" lightBg={false} primary={false}>
                Submit
              </Button>
              <Button to="/">Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
