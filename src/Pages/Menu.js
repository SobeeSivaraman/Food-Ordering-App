import React from "react";
import "../Styles/Menu.css";
import MenuItem from "../Components/MenuItem";
import {MenuList} from "../helpers/MenuList";


export default function Menu(){
   return(
      <div className="menu">
            <h1 className="text-center my-5">OUR MENU</h1>
            <section className="py-4 container">
            <div className="row justify-content-center">
               {MenuList.map((menuItem, index) => {
                return (
                  <MenuItem
                   key={index}
                   item={menuItem}
                  
                   />
                );
               })}
            </div>
            </section>
      </div>
   );
}