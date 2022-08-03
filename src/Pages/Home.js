import React from "react";
import "../Styles/Home.css";
import {Link} from "react-router-dom";

export default function Home(){
    return(
      <div className="home" id="bck-img">
        <div className='headerContainer' >
        <h1>Food Zone</h1>
        <p>Discover the food to fit your style</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
        
      </div>
      </div>
    );
}
