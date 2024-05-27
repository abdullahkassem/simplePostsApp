import Image from "next/image";
import styleVars from "@/styles/_variables.module.scss"

import LikeSVG from "../../public/LikeSVG"
import CommentSVG from "../../public/CommentSVG"
import ShareSVG from "../../public/ShareSVG"
import { useEffect, useState } from "react";


function addItemToLiked(item) {
  const prevArr = JSON.parse(localStorage.getItem("likesArray"));
  localStorage.setItem('likesArray', JSON.stringify([...prevArr, item]));
}

function removeItemFromLiked(item) {
  const prevArr = JSON.parse(localStorage.getItem("likesArray"));
  localStorage.setItem('likesArray', JSON.stringify([...prevArr.filter(element => element !== item)]));
}

export default function PostContent({ postID, imageLink, engagement, caption }) {

  const [liked, setLiked] = useState(null);

  useEffect(() => {
    // check if array exists and if not create it 
    const temp = localStorage.getItem("likesArray");
    // console.log("trying to get element",temp)
    if (temp == null) {
      localStorage.setItem("likesArray", "[]");
    }

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

  return (
    <div className="postContent">

      {imageLink && (<div className="imageContainer">
        <Image src={imageLink}
          alt="Post's Image "
          fill="true"

        />
      </div>)}

      <div className="engagmentBar">

        <LikeSVG className={(liked) ? "engageSVG likePressed" : "engageSVG"} width="20px" height="20px" onClick={likeHandler} /> {likesNum}
        <CommentSVG className="engageSVG" width="20px" height="20px" /> {engagement.comments}
        <ShareSVG className="engageSVG" width="20px" height="20px" /> {engagement.shares}
      </div>

      <div className="postText">
        {caption}
      </div>

    </div>
  )
}
