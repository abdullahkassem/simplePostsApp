import { useEffect, useState } from "react";
import Post from "./Post";
import { searchForItem } from "@/util/localStorageHelpers";


export default function PostsContainer({favouritesPage}) {
    let start=0,end=15;

    const [data, setData] = useState(null);
    // -1-> error,0->loading, 1-> Success
    const [status, setStatus] = useState(0);  

    useEffect(() => {
        console.log("Attempting to get data")

        fetch(`http://localhost:3000/api/getPosts?start=${start}&end=${end}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setStatus(1);
            }).catch((e) => {
                console.error(e);
                setStatus(-1);
            })

    }, []);

    if (status == -1) {
        console.error("Failed to Fetch data.");
        return (<div className="loadPostFailed">Failed to fetch posts...</div>)
    } else if (status == 0)
        return (<div className="loadPostFailed">Loading...</div>)


    if (!data) return <p>No profile data</p>

    return (
        <div>
          {favouritesPage ? (
            data.map((post, index) => {
                if(searchForItem(post.postID) != -1)
                    return(<Post data={post} key={index} />)
            }
            )
          ) : (
            data.map((post, index) => (
              <Post data={post} key={index} />
            ))
          )}
        </div>
      );
}
