import userLogo from "../../assets/user.png";
import flagLogo from "../../assets/flags.png";

const Player = ({ onPlayer }) => {
  console.log(onPlayer);

  return (
    <>
      <div>
        <div className="card bg-white text-black w-96 shadow-sm p-6">
          <figure>
            <img
              className="rounded-lg"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>

          <div className="border-b border-gray-300 py-2">
            <div className="flex items-center">
              <img className="w-10 -ml-2" src={userLogo} alt="user" />
              <h2 className="card-title">Virat Kohli</h2>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-7 -ml-1" src={flagLogo} alt="flagLogo" />
                <h3>CountryName</h3>
              </div>

              <button className="btn">All rounder</button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-bold">
              <span>ratings:</span>
              <span>4.3</span>
            </div>

            <div className="flex justify-between">
              <span className=" font-bold">Bat</span>
              <span>Bowl</span>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-bold">Price</p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
