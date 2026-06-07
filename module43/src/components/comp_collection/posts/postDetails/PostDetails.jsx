import { Link, useLoaderData } from "react-router";

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
      <Link to="/posts">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default PostDetails;
