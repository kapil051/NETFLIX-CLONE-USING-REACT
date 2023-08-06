 import React from "react";
   import "./index.css"

   function NavBar(){

       return (
           <div className="nav-bar">

              <img className="nav-image"  src="https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48" />

                 <ul className="nav-ul">
                        <li className="nav-ul-li">Sports</li>
                        <li className="nav-ul-li">Adult</li>
                        <li className="nav-ul-li">Kids</li>
                        <li className="nav-ul-li">Horror</li>
                 </ul>

                <div>
                   <button className="nav-button-1 nav-button">Search Your Movie......</button>
                  <button className="nav-button-2 nav-button">Search </button>
                </div>
          
                
           </div>
       );
     
   }

 export default NavBar;  