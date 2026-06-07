import { useLoaderData } from "react-router";

const PostDetails = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);

  const { title, body } = postDetails;
  return (
    <div>
      <h2>Post Details</h2>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Body:</strong> {body}
      </p>
    </div>
  );
};

export default PostDetails;
