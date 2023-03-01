import React from "react";
import "./styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Main() {
    return (
        <div className="main">
            <div className="btn-card">
                <h1 className="main-text main-h1">Fatih Gülen</h1>
                <h2 className="main-text main-h2">Test Automation Engineer</h2>
                <h3 className="main-text main-h3">fatih.io</h3>
            </div>

            <div className="button">
                <a href="https://www.google.com/" target="Blank"><button className="btn email"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email</button></a>
                <a href="https://www.google.com/" target="Blank"><button className="btn linkedin"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>Linekedin</button></a>
            </div>

            <div>
                <h2 className="headings">About</h2>
                <p className="text">I am a frontend developer with a particular 
                    interest in making things simple and automating
                    daily tasks. I try to keep up with security and 
                    best practices, and am always looking for new things to learn.
                    </p>
                <h2 className="headings">Interests</h2>
                <p className="text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                    Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
            </div>
        </div>
      );
  }
  export default Main;
  