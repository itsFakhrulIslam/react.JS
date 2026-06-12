import { Star } from "lucide-react";

const Book = ({ book }) => {
  console.log(book);

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags: tagArray,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm p-6 border-2 space-y-4 border-red-400">
        <figure className="bg-gray-400 p-10 w-2/3 mx-auto ">
          <img className="h-42" src={image} alt="Shoes" />
        </figure>

        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{bookName}</h2>
            <span>-{author}</span>
          </div>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}<Star size={16} color="gold" strokeWidth={5}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
