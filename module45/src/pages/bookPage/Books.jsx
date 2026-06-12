import { useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div>
      <h2>all books {allBooks.length} </h2>
    </div>
  );
};

export default Books;

//data loadings way
/**
 * 1. use promise
 * 2. suspens
 * 3. useloading
 * 4. useEffects
 *      const [allBooks, setAllBooks] = useState([]);

        useEffect(() => {
            fetch("booksData.json")
            .then((res) => res.json())
            .then((data) => setAllBooks(data));
        }, []);
 */
