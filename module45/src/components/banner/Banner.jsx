import bookImage from "../../assets/bookBanner.png";

const Banner = () => {
  return (
    <div className="flex justify-around items-center py-16 px-4 bg-indigo-200">
      <div className="">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="">
        <img src={bookImage} width={'250px'} alt="" />
      </div>
    </div>
  );
};

export default Banner;
