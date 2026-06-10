import useInputField from "../../hooks/useInputField";

const HookFroms = () => {
  const [name, nameOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("name: ", name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnChange} />
        {/* <input type="email" defaultValue={name} onChange={nameOnChange} /> */}
        <button type="submit" value='Submit'>Submit</button>
      </form>
    </div>
  );
};

export default HookFroms;
