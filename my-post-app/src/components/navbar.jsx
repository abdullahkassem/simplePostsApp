import NavButton from "./NavButton";

import HeartSVG from "../../public/HeartSVG";
import HomeSVG from "../../public/HomeSVG";
import { useState } from "react";



export default function Navbar() {

  const [homePressed,setHomePressed] =useState(null);

  let homeColor = "white";
  let favouriteColor = "white";

  if(homePressed){
    homeColor="red";
    favouriteColor="white";
  }else if(homePressed!=null){
    {
      homeColor="white";
      favouriteColor="red";
    }
  }
  
  return (
    <nav>
        <NavButton path='' myState={{homePressed,setHomePressed}}>
            <HomeSVG fill={homeColor}/>
        </NavButton>

        <NavButton path='favourites' myState={{homePressed,setHomePressed}}>
            <HeartSVG fill={favouriteColor}/>
        </NavButton>
        
    </nav>
  )
}
