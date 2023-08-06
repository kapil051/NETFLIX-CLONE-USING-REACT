import React from "react";
import reactDOM from "react-dom"
 import Card  from "./Card.jsx";
 import NavBar from "./Nav.jsx";
  import Data from "./Data.jsx";

     function nCards(val){

         return(

           <>

              <Card
                
                name={val.name}
                image={val.image}
                link={val.link}

              />

           </>

         )

     }

reactDOM.render(

  <>

        <NavBar />

          <div className="cards">
         {Data.map(nCards)}
          </div>

    
  </>

    
     ,
   document.getElementById("root")

)