import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const idByParam = useParams();
  const id = Number(idByParam.id);

  const bookData = useLoaderData();

  const data = bookData.find((book) => book.bookId == id);

  const {
    author,
    bookName,
    category,
    image,
    rating,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = data;

  return (
    <div className="px-16 py-8">
      <h1 className="text-center capitalize text-3xl mb-5">
        book details page
      </h1>

      <div className="flex justify-between items-center">
        <div className="flex-1 justify-center items-center p-10 border-2 border-amber-300 rounded-3xl">
          <title>{bookName}</title>
          <img className="" src={image} alt="book images" />
        </div>

        <div className="flex-1 space-y-4 px-4">
          <h1 className="text-4xl">{bookName}</h1>
          <h1 className="text-lg">By- {author}</h1>
          <hr className="border-dashed border-grey-500" />
          <button className="btn btn-active">{category}</button>
          <hr className="border-dashed border-grey-500" />
          <p>Review: {review} </p>

          <div className=" flex justify-start gap-3">
            {tags.map((tag, i) => (
              <button key={i} className="btn btn-soft btn-primary">
                {tag}
              </button>
            ))}
          </div>

          <div className="capitalize border-2 border-gray-300 py-10 px-4 space-y-2 rounded-lg">
            <h4>number of page: {totalPages}</h4>
            <p>publisher: {publisher}</p>
            <p>year of published: {yearOfPublishing} </p>
            <p>rating: {rating} </p>

            <div className="flex gap-3">
              <button className="btn btn-primary">Mark as Read</button>
              <button className="btn btn-info">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
