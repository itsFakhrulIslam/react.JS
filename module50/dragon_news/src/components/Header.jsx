import logos from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-4 mt-4">
      <img src={logos} alt="" />
      <p className="capitalize">journalism without fear or favour</p>
    </div>
  );
};

export default Header;
