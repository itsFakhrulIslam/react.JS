import { useLoaderData } from "react-router";
import Post from "./post/Post";

const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <>
      <h1>posts component page </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
