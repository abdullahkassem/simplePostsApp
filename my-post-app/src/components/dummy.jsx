import Post from "./Post";


export default function Dummy({data}) {

  return (
    <div>
      <Post data={data[0]}/>      
    </div>
  )
}
