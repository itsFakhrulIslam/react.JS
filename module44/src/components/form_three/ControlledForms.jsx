import { useState } from "react";

const ControlledForms = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleOnChagePassword = (e) => {
    setPassword(e.target.value);

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
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
          type="text"
          name="name"
          placeholder="enter your email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          required
          defaultValue={password}
          onChange={handleOnChagePassword}
        />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <small>
        <p style={{ color: "red" }}>{passwordError}</p>
      </small>
    </div>
  );
};

export default ControlledForms;
