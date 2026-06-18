import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

const Home = () => {
  const name = useContext(AuthContext);
  console.log(name);

  return (
    <div>
      <h1 className="text-center text-4xl">this is home</h1>
    </div>
  );
};

export default Home;
