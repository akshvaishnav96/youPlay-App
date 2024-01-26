import React from "react";
import Navbar from "../components/navbar.component";
import { Outlet } from "react-router-dom";



const HeaderFooter = ()=>{


    console.log(document.cookie);


  

return(
<>
    <Navbar />
    <Outlet />
</>
)
   

}

export default HeaderFooter;