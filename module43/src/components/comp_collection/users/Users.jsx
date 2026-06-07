import { useLoaderData } from "react-router";
import User from "./user/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <>
      <h1>users component page</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "16px", justifyContent: "center" }}
      >
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
