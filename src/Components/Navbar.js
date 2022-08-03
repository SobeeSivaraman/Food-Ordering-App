import React ,{ useState }from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.jpeg";
import '../Styles/Navbar.css';


export default function Navbar(){
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return(
        <div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
            <nav className="Navbar">
                <div className="nav-container">
                <img className="nav-logo" src={logo} alt="logo"/>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                  <NavLink to="/"  className="nav-links">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/Menu" className="nav-links" activeClassName="active"onClick={click ? handleClick : null}>Menu</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/Cart" className="nav-links" activeClassName="active" onClick={click ? handleClick : null}>Cart</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/ContactUs" className="nav-links" activeClassName="active" onClick={click ? handleClick : null}>ContactUs</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/Orders" className="nav-links" activeClassName="active" onClick={click ? handleClick : null}>Orders</NavLink>
              </li>
              </ul>
            <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
           </div>
        </div>
        </nav>
        </div>
    );
}