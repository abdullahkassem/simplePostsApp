import Image from "next/image"
import THreeDotsSVG from "../../public/ThreeDotsSVG.jsx"
import placeHolderImg from "../../public/placeHolderImg.svg"

// gets date passed since passed date
function getHoursPassed(dateStr) {
    let dateInMs;

    try {
        dateInMs = Date.parse(dateStr);
    } catch (error) {
        return 0;
    }

    const diffInMilliseconds = Date.now() - dateInMs;

    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

    return Math.floor(diffInHours);
}

export default function PostHeader({ usePlaceHolder, userName, date, profilePic }) {


    const hoursPassed = getHoursPassed(date);

    let dateString = "Cannot determine time of post.";

    if (hoursPassed == 0)
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
