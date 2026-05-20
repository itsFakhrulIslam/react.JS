import { use } from "react";
import User from "./User";

const Users = ({ fetchUsersData }) => {
  //   console.log(fetchUsersData);

  const fatchedUsersArray = use(fetchUsersData);
//   console.log(fatchedUsersArray);

  return (
    <div>
      <h3>Total Users: {fatchedUsersArray.length}</h3>
      {fatchedUsersArray.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
