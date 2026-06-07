import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Post {id}</h2>
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default Post;
