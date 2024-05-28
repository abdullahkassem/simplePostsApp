
import PostHeader from "@/components/PostHeader"
import PostContent from "@/components/PostContent"

// component that display posts or there place holders.
export default function Post({ usePlaceHolder, data }) {

  if (!usePlaceHolder)
    return (
      <div className="postContainer">
        <PostHeader usePlaceHolder={usePlaceHolder} userName={data.user.username} date={data.created_at} profilePic={data.user.profile_picture} />
        <PostContent usePlaceHolder={usePlaceHolder} postID={data.postID} imageLink={data.image_link} engagement={data.engagement} caption={data.text} />
        <hr />
      </div>
    )
  else
    return (
      <div className="postContainer">
        <PostHeader usePlaceHolder={usePlaceHolder}/>
        <PostContent usePlaceHolder={usePlaceHolder}  />
        <hr />
      </div>
    )
}
