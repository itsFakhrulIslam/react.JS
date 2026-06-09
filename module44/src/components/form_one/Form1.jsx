const Form1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(`Hello, ${name}!`);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
