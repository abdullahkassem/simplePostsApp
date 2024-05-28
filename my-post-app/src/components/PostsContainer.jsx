import { useEffect, useState } from "react";
import PostPlaceHolder from "./PostPlaceHolder";
import { searchForItem } from "@/util/localStorageHelpers";
import dynamic from "next/dynamic";

// container for the many posts to be loaded 
export default function PostsContainer({ favouritesPage }) {

    // Posts to be fetched using API
    let start = 0, end = 15;

    const [data, setData] = useState(null);

    // Holds the state of the data: -1-> error,0->loading, 1-> Success
    const [status, setStatus] = useState(0);

    useEffect(() => {
        // On mount attempt to get data

        fetch(`/api/getPosts?start=${start}&end=${end}`)
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
        return (<div className="fullScreenText">Failed to fetch posts...</div>)
    }
    else if (status == 0)
        return (<div className="fullScreenText">Loading...</div>)


    if (!data) return <p className="fullScreenText">No profile data</p>

    // next/dynamic is a composite of React.lazy() and Suspense
    // loading is the suspense fallback.
    const DynamicPost = dynamic(() => import("./Post"), {
        loading: () => <PostPlaceHolder />,
    })

    return (
        <div>
            {favouritesPage ? (
                data.map((post, index) => {
                    if (searchForItem(post.postID) != -1)
                        return (<DynamicPost data={post} key={index} />)
                }
                )
            ) : (
                data.map((post, index) => (
                    <DynamicPost data={post} key={index} />
                ))
            )}
        </div>
    );
}
