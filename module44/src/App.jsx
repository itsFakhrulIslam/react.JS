import "./App.css";
import UnControlledForms from "./components/form_four/UnControlledForms";
import Form1 from "./components/form_one/Form1";
import ControlledForms from "./components/form_three/ControlledForms";
import FromActionFromData from "./components/form_two/FromActionFromData";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Learn React module44</h1>
          <h2>Explore the React form</h2>

          {/* simple Form */}
          <Form1 />

          {/* form action formdata */}
          <FromActionFromData />

          {/* controlled form */}
          <ControlledForms />

          {/* un controlled form */}
          <UnControlledForms />
        </div>
      </section>
    </>
  );
}

export default App;
