import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Lets Learn React Js</h1>

          <TestPerson />
        </div>
      </section>
    </>
  );
}

function TestPerson() {
  const name = "miraj";
  const age = 23;
  return (
    <p>
      I am a {name}, {age} years old, <Habit />
    </p>
  );
}

function Habit() {
  return <p>i have learn React or new technology</p>;
}

export default App;
