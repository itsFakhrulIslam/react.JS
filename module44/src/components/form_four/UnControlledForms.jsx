// uncontrolled form data get and set

import { useRef } from "react";

const UnControlledForms = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    console.log("submitted", email, password);
  };

  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          ref={emailRef}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          ref={passRef}
        />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UnControlledForms;
