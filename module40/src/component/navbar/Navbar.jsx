import navLogo from "../../assets/projectAssets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar max-w-300 mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img src={navLogo} alt="navLogo" />
          </a>
        </div>
        <div className="flex-none">
          <span>60000000000 </span>
          <span>🪙</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
