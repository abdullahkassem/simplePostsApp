import Image from "next/image";
import usersProfilePic from "../../public/defaultProfilePic.png"

export default function UserPP() {
  return (
    <div className="UserPP">
      <Image src={usersProfilePic}
        fill="true"
        alt="Your profile Pic"
        sizes="100vw"
      />
    </div>
  )
}
