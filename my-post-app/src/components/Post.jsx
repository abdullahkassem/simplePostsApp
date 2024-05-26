// sample data:
// {
//     "text": "Did you know today is National Rescue Dog Day?    Consider donating to your local animal shelter to help homeless pups find their forever homes! #rescuedog #nationalrescuedogday",
//     "created_at": "2024-05-26_11:30:00-04:00",
//     "image_link": "https://example.com/shelter_dog_photo.jpg",
//     "user": {
//         "username": "pawsitive_vibes",
//         "profile_picture": "https://example.com/profile_pics/avatar14.png"
//     },
//     "engagement": {
//         "likes": 342,
//         "comments": 57,
//         "shares": 29
//     }
// }

import PostHeader from "@/components/PostHeader"
import PostContent from "@/components/PostContent"

export default function Post({data}) {
  return (
    <div className="postContainer">
        <PostHeader userName={data.user.username} date={data.created_at} profilePic={data.user.profile_picture}/>
        <PostContent imageLink={data.image_link} engagement={data.engagement} caption={data.text} />

      
    </div>
  )
}
