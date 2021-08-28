import React from "react";
import { ButtonLink as Button } from "../ButtonElement";
import "./MessageModal.css";

const MessageModal = (props) => {
  return (
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <header className="header">
          <h2>Notification</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="footer">
          <Button lightBg={true} to="/">
            OK
          </Button>
        </footer>
      </div>
    </>
  );
};

export default MessageModal;
