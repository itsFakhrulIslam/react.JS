import { useLoaderData } from "react-router";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return <div>posts component page</div>;
};

export default Posts;
