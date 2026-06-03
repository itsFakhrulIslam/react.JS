import "./App.css";
import Recharts from "./components/charts/Recharts";
import CNavbar from "./components/custmNav/CNavbar";
import DNavebar from "./components/daisyNav/DNavebar";

function App() {
  return (
    <>
      {/* <DNavebar /> */}
      <CNavbar />

      <Recharts />
    </>
  );
}

export default App;
