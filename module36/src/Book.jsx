export default function Book({ nameOfBook }) {
  // console.log(nameOfBook);

  // const { name, author_name, release_year } = nameOfBook;
  // console.log(name);
  // console.log(author_name);
  // console.log(release_year);

  //   const boooks = {
  //     book1: {
  //       name: "b1",
  //       year: 2000,
  //     },
  //     book1: {
  //       name: "b2",
  //       year: 2020,
  //     },
  //   };
  //   console.log(boooks);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h3>Book:{nameOfBook.id} </h3>
      <h2>Book Name: {nameOfBook.name} </h2>
      <h2>Author Name: {nameOfBook.author_name} </h2>
      <p>Release Year:{nameOfBook.release_year} </p>
    </div>
  );
}
