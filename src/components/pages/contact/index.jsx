import React from "react";
import "./style.scss";
import imgContact from "./contact-us.png";

const Contact = props => {

  return (
    <div className="contact-page">
      <div className="contac-data">
        <span><strong>Mobile Number:</strong>  +374-00-00-00</span>
        <span><strong>Email Adress:</strong>  gstech@gmail.com</span>
      </div>
      <img src={imgContact} />
    </div>
  );
};

export default Contact;
