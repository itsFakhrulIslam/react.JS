// form action formdata

const FromActionFromData = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
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
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FromActionFromData;
