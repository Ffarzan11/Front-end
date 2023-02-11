import React from "react";
// import header from "./style/header.css";
import index from "../components/home/index.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        /*
        include links
        */
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <img className="img-thumbnail" src={logo} />
                <div className="info">
                    <div className="heads">My Account</div> 
                    <div className="heads">Home</div>
                    <div className="heads">About</div>
                    <div className="heads">Contact Us</div>

                </div>
            </div>
        </nav>
    );
}

export default Header