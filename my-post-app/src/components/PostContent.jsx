import Image from "next/image";

import placeHolderImg from "../../public/placeHolderImg.svg"
import LikeSVG from "../../public/LikeSVG"
import CommentSVG from "../../public/CommentSVG"
import ShareSVG from "../../public/ShareSVG"
import { useEffect, useState } from "react";
import { addItemToLiked, removeItemFromLiked, searchForItem } from "@/util/localStorageHelpers";

// Depending on usePlaceHolder either a placeholder post content will be loaded or the actual content
export default function PostContent({ usePlaceHolder, postID, imageLink,
	engagement = {
		"likes": 0,
		"comments": 0,
		"shares": 0
	}, caption }) {

	// dummy value just for logic below
	if (usePlaceHolder) {	
		imageLink = "anything"
	}

	// show if post has been liked or not
	const [liked, setLiked] = useState(null);

	useEffect(() => {
		// check if local array exists and if not, create it 
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

	// toggle like status for post
	const likeHandler = (e) => {
		
		if (!liked) {
			setLiked((prev) => !prev);
			addItemToLiked(postID);

		} else if (liked) {
			setLiked((prev) => !prev);
			removeItemFromLiked(postID);

		}
	}

	let likesNum = (liked) ? engagement.likes + 1 : engagement.likes;

	// Checks if post has an image or not, because posts without images have slightly different layout.
	let engageBarClass = (imageLink) ? "engagmentBar" : "engagmentBar EngageNoImage";

	let imgLinkToBeUsed = imageLink;
	let imgClass = "imageContainer";

	// if we are loading a placeGolder (i.e. usePlaceHolder == true)
	// we need to load placeholder image and use appropriate class
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
					priority={(usePlaceHolder) ? true : false}
					sizes="90vw"
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
