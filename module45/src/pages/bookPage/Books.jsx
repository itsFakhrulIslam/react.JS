import { useEffect, useState } from "react";
import Book from "./book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center capitalize">all books here </h2>
      <p className="text-center">
        <small>Total Books: {allBooks.length}</small>
      </p>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-4">
        {allBooks.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

//data loadings way
/**
 * 1. use promise
 *       suspens
 * 3. useloading
 * 4. useEffects
 *      const [allBooks, setAllBooks] = useState([]);

        useEffect(() => {
            fetch("booksData.json")
            .then((res) => res.json())
            .then((data) => setAllBooks(data));
        }, []);
 */
