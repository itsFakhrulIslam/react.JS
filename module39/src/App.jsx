import "./App.css";
// import {
//   add,
//   divide,
//   greetNewMember,
//   modulus,
//   multiply,
//   sayHelloToNewMember,
//   subtract,
// } from "./utils/math/math";

function App() {
  //^ import/export example
  // const sumation = add(5, 10);
  // console.log("sumation", sumation);

  // const substraction = subtract(10, 5);
  // console.log("substraction", substraction);

  // const multiplication = multiply(5, 10);
  // console.log("multiplication", multiplication);

  // const division = divide(10, 5);
  // console.log("division", division);

  // const modulusation = modulus(10, 3);
  // console.log("modulus", modulusation);

  // const sayGreeting = greetNewMember("miraj");
  // console.log("greetNewMember", sayGreeting);

  // const sayHello = sayHelloToNewMember("miraj");
  // console.log("sayHelloToNewMember", sayHello);

  // data fetching example
  //1 in memory data
  const users = [
    { id: 1, name: "miraj", email: "miraj@example.com" },
    { id: 2, name: "fahim", email: "fahim@example.com" },
    { id: 3, name: "rakib", email: "rakib@example.com" },
  ];

  return (
    <>
      <section id="center">
        <div>
          <h1>Learn ReactJs module39</h1>
        </div>
      </section>
    </>
  );
}

export default App;
