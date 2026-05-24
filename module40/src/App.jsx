import "./App.css";
import AllPlayers from "./component/allPlayers/AllPlayers";
import Navbar from "./component/navbar/Navbar";
import SelectPlayers from "./component/selectPlayers/SelectPlayers";

function App() {
  return (
    <>
      <Navbar />
      <AllPlayers />
      <SelectPlayers />
    </>
  );
}

export default App;
