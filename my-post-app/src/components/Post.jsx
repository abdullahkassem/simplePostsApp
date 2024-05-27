
import PostHeader from "@/components/PostHeader"
import PostContent from "@/components/PostContent"

export default function Post({ data }) {
  return (
    <div className="postContainer">
      <PostHeader userName={data.user.username} date={data.created_at} profilePic={data.user.profile_picture} />
      <PostContent postID={data.postID} imageLink={data.image_link} engagement={data.engagement} caption={data.text} />
      <hr />
    </div>
  )
}
