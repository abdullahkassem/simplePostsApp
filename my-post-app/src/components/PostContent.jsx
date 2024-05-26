import Image from "next/image";
import styleVars from "@/styles/_variables.module.scss"

import LikeSVG from "../../public/LikeSVG"
import CommentSVG from "../../public/CommentSVG"
import ShareSVG from "../../public/ShareSVG"

export default function PostContent({imageLink,engagement,caption}) {

  // 2 cases: image or no image


  return (
    <div className="postContent">
      

      {imageLink && (<div className="imageContainer">
          <Image src={imageLink}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // style={{
          //   width: '100%',
          //   height: '100%',
          // }}
          // width={300}
          // height={300}
          fill="true"
          style={{
            "border-radius": "20px"
          }}
          
          alt="Picture with post."/> 
      </div>)}
      
      <div className="engagmentBar">
      
        <LikeSVG className="engageSVG" width="20px" height="20px"/> {engagement.likes} 
        <CommentSVG className="engageSVG" width="20px" height="20px"/> {engagement.comments} 
        <ShareSVG className="engageSVG" width="20px" height="20px"/> {engagement.shares}
      </div>

      <div className="postText">
        {caption}
      </div>

    </div>
  )
}
