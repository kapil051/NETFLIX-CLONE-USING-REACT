import React from "react";
 import "./index.css"
 
   function Card(Props){

         return (
         
               <>

                     <div className="card">

                     <p className="card-name">{Props.name}</p>
                     <img className="card-image" src={Props.image} alt="IMAGE" />
                      <p className="card-org">A Netflix Origional Series</p>
                     <button className="card-button"> <a href={Props.link} target="_blank"> Watch Now </a> </button>

                     </div>


                 
               </>

         )

   }

   export default Card;