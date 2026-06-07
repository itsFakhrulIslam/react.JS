import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return <div>users component page</div>;
};

export default Users;
