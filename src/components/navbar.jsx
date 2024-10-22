import React from "react";
import lang from "./images/language.svg"
import "./navbar.css"
export default function NavBar(){
    return(
        <>
          <div className="header">
                <div className="logo">PrimePeak</div>
                <div className="nav">
                <a href="#">Support</a>
                <div className="d-flex align-items-center">
                    <img id="lang" src={lang} alt="Language" />
                    <a href="#" className="language-link">Language</a>
                </div>
                <a href="#">List your property</a>
                </div>
         </div>
        
        </>
    )
}