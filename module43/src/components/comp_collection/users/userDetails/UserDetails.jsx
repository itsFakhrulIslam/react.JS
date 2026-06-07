import { Link, useLoaderData } from "react-router";

const UserDetails = () => {
  const userDetailsLoader = useLoaderData();
  //   console.log(userDetailsLoader);

  const {
    name,
    website,
    address: { city },
  } = userDetailsLoader;

  return (
    <div>
      <h1>User Details Component</h1>
      <h2>Name: {name}</h2>
      <p>Website: {website}</p>
      <p>City: {city}</p>
      <Link to="/users">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default UserDetails;
