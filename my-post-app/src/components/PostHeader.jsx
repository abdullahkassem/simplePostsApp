import Image from "next/image"
import THreeDotsSVG from "../../public/ThreeDotsSVG.jsx"

// gets date passed since passed date
function getHoursPassed(dateStr) {
    let dateInMs;
    
    try {
        dateInMs = Date.parse(dateStr);
    } catch (error) {
        return 0;
    }
    
    const diffInMilliseconds = Date.now() - dateInMs;
  
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60 );
    
    return Math.floor(diffInHours);
  }

export default function PostHeader({userName,date,profilePic}) {
  
    
    const hoursPassed = getHoursPassed(date);
    
    let dateString = "Cannot determine time of post.";
    
    if(hoursPassed == 0)
        dateString = "Less than an hour ago";
    else if(hoursPassed <= 24)
        dateString = hoursPassed + " hours ago";
    else
        dateString = new Date(date).toLocaleString();
    

    
  
    return (
    <div className="postHeader">
        <Image src={profilePic}
            width={70}
            height={70}
            alt="Profile Picture."/>
        <div className="userName">{userName}</div>
        <div className="datePosted">{dateString}</div>
        <div className="options">
            <THreeDotsSVG/>
        </div>      
    </div>
  )
}
