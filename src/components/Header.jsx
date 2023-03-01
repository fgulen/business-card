import "./styles/Header.css"

import Profileimg from "../images/logo2.jpg"

function Header() {
    return (
        <div className="header">
            <img className="header-image" src={Profileimg} alt="asd"/>
        </div>
      );
  }
  
export default Header;