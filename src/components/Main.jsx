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
                <h2 className="main-text main-h3">fatih.io</h2>
            </div>

            <div className="button">
                <a href="https://www.google.com/" target="Blank"><button className="btn email"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email</button></a>
                <a href="https://www.google.com/" target="Blank"><button className="btn linkedin"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>Linekedin</button></a>
            </div>

            <div>
                <div className="headings-wrapper">
                <h3 className="headings">About</h3>
                <p className="text">Test automation expert living in Germany, working at Deutsche Bahn and expanding knowledge in React. Combining software testing and development expertise to deliver successful project outcomes.
                </p>
                <h3 className="headings">Interests</h3>
                <p className="text">Blockchain technology, photography, and teaching. Passionate about exploring the potential of blockchain, capturing life's moments through photography, and sharing knowledge with students.
                </p>
                </div>
            </div>
        </div>
    );
}
export default Main;
