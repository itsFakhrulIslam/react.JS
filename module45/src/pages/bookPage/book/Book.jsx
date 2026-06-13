import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ book }) => {

  const {
    bookId,
    author,
    bookName,
    category,
    image,
    rating,
    tags,
    totalPages,
  } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-lg p-6 space-y-4">
        <figure className="bg-gray-200 p-10 w-2/3 mx-auto ">
          <img
            className="h-42 transition duration-1000 hover:rotate-12 "
            src={image}
            alt="Shoes"
          />
        </figure>

        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{bookName}</h2>
            <span>by-{author}</span>
          </div>

          <div className="text-center">
            <button className="btn">Pages: {totalPages}</button>
            {tags.map((tag, index) => (
              <button className="btn" key={index}>
                <small>{tag}</small>
              </button>
            ))}
          </div>

          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <Star size={16} color="gold" strokeWidth={5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
