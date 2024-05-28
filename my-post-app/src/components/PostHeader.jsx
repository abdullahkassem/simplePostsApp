import Image from "next/image"
import THreeDotsSVG from "../../public/ThreeDotsSVG.jsx"
import placeHolderImg from "../../public/placeHolderImg.svg"
import { getHoursPassed } from "@/util/otherUtil.js";

// Depending on usePlaceHolder either a placeholder post header will be loaded or the actual header content
export default function PostHeader({ usePlaceHolder, userName, date, profilePic }) {


    const hoursPassed = getHoursPassed(date);

    let dateString = "Cannot determine time of post.";

    if (hoursPassed < 0)
        dateString = "Post from the future ??!! 🤔";
    else if (hoursPassed == 0)
        dateString = "Less than an hour ago";
    else if (hoursPassed <= 24)
        dateString = hoursPassed + " hours ago";
    else
        dateString = new Date(date).toLocaleString()
    
    if (!usePlaceHolder)
        return (
            <div className="postHeader">
                <Image src={profilePic}
                    width={70}
                    height={70}
                    // placeholder={placeHolderImg}
                    alt="Profile Picture." />
                <div className="userName">{userName}</div>
                <div className="datePosted">{dateString}</div>
                <div className="options">
                    <THreeDotsSVG />
                </div>
            </div>
        )
    else
        return (
            <div className="postHeader postPlaceHolder">
                <Image src={placeHolderImg}
                    width={70}
                    height={70}
                    priority={true}
                    alt="Profile Picture." />
                <div className="userName">...</div>
                <div className="datePosted">...</div>
                <div className="options">
                    <THreeDotsSVG />
                </div>
            </div>
        )
}
