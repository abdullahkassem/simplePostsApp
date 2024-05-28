import Link from 'next/link';



export default function NavButton({ path, children, myState }) {


  // makes sure correct state is set
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
