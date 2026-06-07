import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, username, email } = user;

  const userCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={userCardStyle}>
      <h4>User Details</h4>
      <h2>Name: {name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <Link
        to={`/users/${id}`}
        style={{ textDecoration: "none", color: "#007bff" }}
      >
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default User;
