const User = ({ user }) => {
  //   console.log(user);

  return (
    <div
      style={{
        textAlign: "left",
        border: "2px dotted yellow",
        marginTop: "10px",
        padding: "20px",
      }}
    >
      <h3>Name: {user.name} </h3>
      <h3>Email: {user.email} </h3>
    </div>
  );
};

export default User;
