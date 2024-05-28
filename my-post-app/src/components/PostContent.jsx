import Image from "next/image";
import styleVars from "@/styles/_variables.module.scss"

import LikeSVG from "../../public/LikeSVG"
import CommentSVG from "../../public/CommentSVG"
import ShareSVG from "../../public/ShareSVG"
import { useEffect, useState } from "react";
import { addItemToLiked, removeItemFromLiked, searchForItem } from "@/util/localStorageHelpers";


export default function PostContent({ postID, imageLink, engagement, caption }) {

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
	let engageBarClass = (imageLink)? "engagmentBar": "engagmentBar EngageNoImage";

	return (
		<div className="postContent">

			{imageLink && (<div className="imageContainer">
				<Image src={imageLink}
					alt="Post's Image "
					fill="true"
					priority="false"
				/>
			</div>)}

			<div className={engageBarClass}>

				<LikeSVG className={(liked) ? "engageSVG likePressed" : "engageSVG"} onClick={likeHandler} /> {likesNum}
				<CommentSVG className="engageSVG" /> {engagement.comments}
				<ShareSVG className="engageSVG" /> {engagement.shares}
			</div>

			<div className="postText">
				{caption}
			</div>

		</div>
	)
}
