import { useEffect,useState } from "react";
import Post from "./Post";

// async function getPosts(start, end) {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/getPosts?start=${start}&end=${end}`)
//   const posts = await res.json()
//   // Pass data to the page via props
  
//   return {posts};
// }


export default function Dummy() {
  // console.log(data[1])

  let start = 0;
  let end = 5;

  const [data, setData] = useState(null);
  const [status, setStatus] = useState(0);  // -1-> error,0->loading, 1-> Success

  useEffect(() => {
    console.log("Attempting to get data")
    
    fetch(`http://localhost:3000/api/getPosts?start=${start}&end=${end}`)
      .then((res) => res.json())
      .then((data) => {
        
        setData(data);
        // console.log("data: ",data);
        setStatus(1);
      }).catch((e)=>{
        console.error(e);
        setStatus(-1);
      })
  }
, []);

  if (status == -1) {
    console.error("Failed to Fetch data.");
    return (
      <div className="loadPostFailed">
        Failed to fetch posts...
      </div>
    )
  }else if (status == 0){
    return(<div className="loadPostFailed">
        Loading...
      </div>)
  }

  if (!data) return <p>No profile data</p>

  return (
    <div>

      {data.map((post, index) => {
        return (<Post data={post} key={index} />)
      })}

      {/* <Post data={data[1]}/>       */}
    </div>
  )
}
