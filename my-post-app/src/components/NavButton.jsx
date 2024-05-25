import Image from 'next/image'
import { useRouter } from 'next/router';



export default function NavButton({path,children,myState}) {

  const router = useRouter();

  const btnHandle = (e) =>{
    // console.log("curpath is",router.pathname)
    // console.log("path is",path)
      
    if(myState.homePressed == null)      
    {
      if(path=='favourites'){
        router.push('/'+path);
        myState.setHomePressed( false);
      }else{
        myState.setHomePressed( true);
      }
      
      
    }else if(myState.homePressed && path == "favourites"){
      router.push('/'+path);
      myState.setHomePressed( false);
    }else if(!myState.homePressed&& path == ""){
      router.push('/'+path);
      myState.setHomePressed( true);
    }
    
  }
  
  return (
    <button className="navButton" onClick={btnHandle}>
      {children}
    </button>
  )
}
