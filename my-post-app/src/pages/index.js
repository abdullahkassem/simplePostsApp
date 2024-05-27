import PostsContainer from "@/components/PostsContainer";

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('http://localhost:3000/api/getPosts?start=0&end=5')
//   const posts = await res.json()
//   // Pass data to the page via props
//   return { props: { posts } }
// }

export default function Home() {
  return (
    <>
      <main >  
        <PostsContainer/>
      </main>
    </>
  );
}
