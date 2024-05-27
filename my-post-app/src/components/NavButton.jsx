import Link from 'next/link';



export default function NavButton({ path, children, myState }) {


  // const btnHandle = (e) => {

  //   if (myState.homePressed == null) {
  //     if (path == 'favourites') {
  //       router.push('/' + path);
  //       myState.setHomePressed(false);
  //     } else {
  //       myState.setHomePressed(true);
  //     }


  //   } else if (myState.homePressed && path == "favourites") {
  //     router.push('/' + path);
  //     myState.setHomePressed(false);
  //   } else if (!myState.homePressed && path == "") {
  //     router.push('/' + path);
  //     myState.setHomePressed(true);
  //   }
  // }

  const linkHandler = (e) => {
    
    if (myState.homePressed == null) {
      if (path == 'favourites') {
        myState.setHomePressed(false);
      } else {
        myState.setHomePressed(true);
      }


    } else if (myState.homePressed && path == "favourites") {
      myState.setHomePressed(false);
    } else if (!myState.homePressed && path == "/") {
      myState.setHomePressed(true);
    }
  }

  

  return (
    <Link href={path} className="navButton" onClick={linkHandler} >
      {children}
    </Link>
  )
}
