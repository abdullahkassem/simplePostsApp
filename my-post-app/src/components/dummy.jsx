import Post from "./Post";


export default function Dummy({data}) {
// console.log(data[1])

  return (
    <div>

      {data.map((post,index)=>{
        return (<Post data={post} key={index}/>)
      })}

      {/* <Post data={data[1]}/>       */}
    </div>
  )
}
