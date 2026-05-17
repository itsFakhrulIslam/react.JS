import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import CountBtn from "./CountBtn";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("poke 1 clicked");
  }

  const handleClick2 = () => {
    alert("poke 3 clicked");
  };

  const handleClick4 = (num) => {
    let result = num * 5;
    alert(result);
  };

  // section for users
  const fetchAllUsers = fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((res) => res.json());

  return (
    <>
      <section id="center">
        <div>
          <h2>Learn ReactJs module37</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <button onClick={handleClick}>Poke me 1</button>

            <button onClick={(handleClick1) => alert("poke 2 clicked")}>
              Poke me 2
            </button>

            <button onClick={handleClick2}>Poke me 3</button>

            <button
              onClick={function handleClick3() {
                alert("poke 4 clicked");
              }}
            >
              Poke me 4
            </button>

            {/* wrap by arrow function for pass the parameters */}
            <button onClick={() => handleClick4(10)}>
              Pass params by click
            </button>
          </div>

          <CountBtn />

          <Batsman />

          {/* section for users */}
          <Suspense
            fallback={
              <p
                style={{
                  marginTop: "30px",
                  border: "2px dotted yellow",
                  borderRadius: "10px",
                  padding: "40px",
                }}
              >
                users data coming...
              </p>
            }
          >
            <Users fetchUsers={fetchAllUsers} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default App;
