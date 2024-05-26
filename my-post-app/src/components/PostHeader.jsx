import Image from "next/image"

// gets date passed since passed date
function getDatePassed(dateStr) {
    console.log(dateStr);
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
  
  
  
    return (
    <div className="postHeader">
        <Image src={profilePic}
            width={70}
            height={70}
            alt="Picture with post."/>
        <div className="userName">{userName}</div>
        <div className="datePosted">{getDatePassed(date)+" hours ago"}</div>
        <div className="options">...</div>      
    </div>
  )
}
