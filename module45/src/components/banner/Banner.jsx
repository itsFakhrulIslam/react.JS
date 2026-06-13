import bookImage from "../../assets/bookBanner.png";
import bookImage1 from "../../assets/books4.png";

const Banner = () => {
  return (
    <>
      {/* <div className="flex justify-around items-center py-16 px-4 bg-indigo-200">
        <div className="">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="">
          <img src={bookImage} width={"250px"} alt="" />
        </div>
      </div> */}

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <img
              width={"450px"}
              src={bookImage}
              className="max-w-lg transition duration-1000 hover:rotate-15"
              alt="book banners"
            />
            <div className="absolute bottom-0 right-30">
              <img width={"150px"} src={bookImage1} alt="book banners" />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">View the List</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
