import Image from "next/image";
import styleVars from "@/styles/_variables.module.scss"

export default function PostContent({imageLink,engagement,caption}) {

  // 2 cases: image or no image


  return (
    <div className="postContent">
      <div className="imageContainer">
          <Image src={imageLink}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // style={{
          //   width: '100%',
          //   height: '100%',
          // }}
          // width={300}
          // height={300}
          fill="true"
          
          alt="Picture with post."/> 
      </div>
      
      <div className="engagmentBar">
        likes: {engagement.likes} comments: {engagement.comments} shares: {engagement.shares}
      </div>

      <div className="postText">
        {caption}
      </div>

    </div>
  )
}
