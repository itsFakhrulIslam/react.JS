import "./App.css";
import Task from "./Task";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Lets Learn React Js</h1>

          {/* <TestPerson />

          <Habit />

          <Technology name="miraj" feildTech="js" />
          <Technology name="siraj" feildTech="react" />
          <Technology name="piraj" feildTech="nextjs" />

          <Device deviceName="laptop" devicePrice="30000" />
          <Device deviceName="laptop1" devicePrice="40000" />
          <Device deviceName="laptop2" devicePrice="50000" />
          <Device deviceName="laptop3" devicePrice="60000" />

          <Resume candidateName="miraj" dept="al hadith" session="1st" />
          <Resume candidateName="siraj" dept="al quran" session="2nd" />
          <Resume candidateName="rayhan" dept="al fiq" session="1st" />
          <Resume candidateName="rabbi" dept="Bangla" session="3rd" />
          <Resume candidateName="rabbi" session="3rd" />
          <Resume dept="Bangla" session="3rd" /> */}

          <Task taskName="do the work 0" taskIsDone={true} />
          <Task taskName="do the work 1" taskIsDone={false} />
          <Task taskName="do the work 2" taskIsDone={true} />
          <Task taskName="do the work 3" taskIsDone={false} />
          <Task taskName="do the work 4" taskIsDone={true} />
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
          marginTop: "10px",
        }}
      >
        technology: {props.feildTech}
      </p>
    </div>
  );
}

function Device(params) {
  console.log(params);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dashed yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h2>Device Name: {params.deviceName}</h2>
      <p>Price: {params.devicePrice}</p>
    </div>
  );
}

//^ object destructuring
// const resumeData = {candidateName: 'miraj', dept: 'al hadith', session: '1st'}
// const { candidateName, dept, session } = resumeData;

function Resume({ candidateName = "Unknown person", dept = "null", session }) {
  // console.log(candidateName);
  // console.log(dept);
  // console.log(session);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h2>Name: {candidateName} </h2>
      <p>Depart: {dept} </p>
      <p>Year: {session} </p>
    </div>
  );
}
export default App;
