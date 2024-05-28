import Image from "next/image";
import usersProfilePic from "../../public/defaultProfilePic.png"
import placeHolderImg from "../../public/placeHolderImg.svg"

//user profile picture component
export default function UserPP() {
  return (
    <div className="UserPP">
      <Image src={usersProfilePic}
        fill="true"
        // placeholder={placeHolderImg}
        alt="Your profile Pic"
        sizes="20vw"
        priority={false}
      />
    </div>
  )
}
