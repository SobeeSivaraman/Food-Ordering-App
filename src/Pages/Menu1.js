import React from "react";
import "../Styles/Menu.css";
import logo from "../Images/logo.jpeg";

export default function Menu(){
     return(
        <nav className="navbar navbar-expand-lg bg-dark" id="navbar">
         <div className="container-fluid">
         <img className="nav-logo" src={logo} alt="logo"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                   <a className="nav-link "  href="/#">Home</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link "  href="/#">Menu</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link " href="/#">Cart</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link "  href="/#">ContactUs</a>
                </li>
             </ul>
             <button>
                   <a className="btn p-2 my-lg-0 my-2"  href="/#">Orders</a>
             </button>
        </div>
       </div>
       </nav>
     );
}