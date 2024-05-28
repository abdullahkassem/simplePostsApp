import Image from "next/image";

import placeHolderImg from "../../public/placeHolderImg.svg"
import LikeSVG from "../../public/LikeSVG"
import CommentSVG from "../../public/CommentSVG"
import ShareSVG from "../../public/ShareSVG"
import { useEffect, useState } from "react";
import { addItemToLiked, removeItemFromLiked, searchForItem } from "@/util/localStorageHelpers";


export default function PostContent({ usePlaceHolder, postID, imageLink, caption,
	engagement = {
		"likes": 0,
		"comments": 0,
		"shares": 0
	} }) {

	const [liked, setLiked] = useState(null);

	useEffect(() => {
		// check if array exists and if not create it 
		const temp = localStorage.getItem("likesArray");
		if (temp == null) {
			localStorage.setItem("likesArray", "[]");
		}

		//check if post is liked already or not
		if (searchForItem(postID) == -1)
			setLiked(false);
		else
			setLiked(true);

	}, []);


	const likeHandler = (e) => {
		console.log("Like Button Pressed")
		if (!liked) {
			setLiked((prev) => !prev);
			addItemToLiked(postID);

		} else if (liked) {
			setLiked((prev) => !prev);
			removeItemFromLiked(postID);

		}
	}

	let likesNum = (liked) ? engagement.likes + 1 : engagement.likes;
	let engageBarClass = (imageLink) ? "engagmentBar" : "engagmentBar EngageNoImage";

	let imgLinkToBeUsed = imageLink;
	let imgClass = "imageContainer";

	if (usePlaceHolder) {
		imgLinkToBeUsed = placeHolderImg;
		imgClass = "imageContainer postPlaceHolder"
	}

	return (
		<div className="postContent">

			

			{imageLink && (<div className={imgClass}>
				<Image src={imgLinkToBeUsed}
					alt="Post's Image"
					fill="true"
					priority={false}
					sizes="90vw"
					// placeholder="blur"
					style={{
						"objectFit": "cover"
					}}
				/>
			</div>)}

			<div className={engageBarClass}>
				<div className="engageSVGContainer">
					<LikeSVG className={(liked) ? "engageSVG likePressed" : "engageSVG"} onClick={likeHandler} />
					{!usePlaceHolder && <div>{likesNum}</div>}
				</div>

				<div className="engageSVGContainer">
					<CommentSVG className="engageSVG" />
					{!usePlaceHolder && <div>{engagement.comments}</div>}

				</div>

				<div className="engageSVGContainer">
					<ShareSVG className="engageSVG" />
					{!usePlaceHolder && <div>{engagement.shares}</div>}
				</div>
			</div>

			{!usePlaceHolder && <div className="postText">{caption}</div>}

		</div>
	)
}
