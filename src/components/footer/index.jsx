import React from 'react';
import { Link } from "react-router-dom";
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = props => {

    return (
            <footer>
                <div className="footer-page">

                    <span className="footer-text"> We Suggest The Best News </span>

                    <Link to={'/news'}>NEWS</Link>

                </div>
                <div className="footer-contact">
                   
                    <div><FontAwesomeIcon icon={faEnvelope}/>Email : gstech@gmail.com</div>
                    <div><FontAwesomeIcon icon={faPhone}/>Phone : +374-00-00-00</div>

                </div>
            </footer>
    )

}


export default Footer;