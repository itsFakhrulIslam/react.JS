import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Lets Learn React Js</h1>
          <TestPerson />
          <Habit />
          <Technology name="miraj" feildTech="js" />
          <Technology name="siraj" feildTech="react" />
          <Technology name="piraj" feildTech="nextjs" />
        </div>
      </section>
    </>
  );
}

function TestPerson() {
  const name = "miraj";
  const age = 23;
  return (
    <>
      <h2
        style={{
          textAlign: "left",
          color: "gold",
          marginTop: "50px",
        }}
      >
        Developer:{" "}
      </h2>
      <p className="externalStyle">
        I am a {name}, {age} years old
      </p>
    </>
  );
}

function Habit() {
  const outerStyle = {
    color: "red",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "right",
  };

  return <p style={outerStyle}>-i have learn React or new technology</p>;
}

function Technology(props) {
  console.log(props);

  return (
    <div
      style={{
        border: "2px solid grey",
        padding: "30px",
        marginTop: "40px",
      }}
    >
      <p
        style={{
          fontSize: "1.5rem",
          color: "white",
        }}
      >
        Developer: {props.name}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          color: "white",
          marginTop:'10px'
        }}
      >
        technology: {props.feildTech}
      </p>
    </div>
  );
}

export default App;
