import NavButton from "./NavButton";

import HeartSVG from "../../public/HeartSVG";
import HomeSVG from "../../public/HomeSVG";
import { useState } from "react";

import styleVar from '@/styles/_variables.module.scss'

export default function Navbar() {

  const [homePressed,setHomePressed] =useState(null);

  let homeColor = styleVar.unusedColor;
  let favouriteColor = styleVar.unusedColor;

  if(homePressed){
    homeColor=styleVar.bottomNavColor;
    favouriteColor=styleVar.unusedColor;
  }else if(homePressed!=null){
    {
      homeColor=styleVar.unusedColor;
      favouriteColor=styleVar.bottomNavColor;
    }
  }
  
  return (
    <nav>
        <NavButton path='/' myState={{homePressed,setHomePressed}}>
            <HomeSVG fill={homeColor}/>
        </NavButton>

        <NavButton path='favourites' myState={{homePressed,setHomePressed}}>
            <HeartSVG fill={favouriteColor}/>
        </NavButton>
        
    </nav>
  )
}
