import { useLoaderData } from "react-router";
import User from "./user/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <>
      <h1>users component page</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
