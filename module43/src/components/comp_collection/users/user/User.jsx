const User = ({ user }) => {
  const {
    name,
    username,
    email,
    address: { city },
    address: {
      geo: { lat },
    },
    phone,
    website,
    company: { name: companyName },
  } = user;

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
    </div>
  );
};

export default User;
