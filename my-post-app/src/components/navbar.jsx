import NavButton from "./NavButton";

import HeartSVG from "../../public/HeartSVG";
import HomeSVG from "../../public/HomeSVG";
import { useEffect, useState } from "react";

import styleVar from '@/styles/_variables.module.scss'
import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter();
  
  // true if at home page, this controls navigation and the buttons color
  const [homePressed,setHomePressed] =useState(null);
  
  // For the initial Load
  useEffect(()=>{
    if(router.pathname == "/"){
      setHomePressed(true);
    }else
    setHomePressed(false);
  },[])

  
  let homeColor = styleVar.unusedColor;
  let favouriteColor = styleVar.unusedColor;

  // set appropriate colors according to page.
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
