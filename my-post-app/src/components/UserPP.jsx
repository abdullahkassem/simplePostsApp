import Image from "next/image";
import usersProfilePic from "../../public/defaultProfilePic.png"

export default function UserPP() {
  return (
    <div className="UserPP">
        <Image src={usersProfilePic} 
        fill="true"
        // style={{"border-radius": "50%"}}
        />
    </div>
  )
}
