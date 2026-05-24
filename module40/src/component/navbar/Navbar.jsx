import navLogo from "../../assets/projectAssets/logo.png";

const Navbar = () => {
  return (
    <>
      <div class="navbar max-w-300 mx-auto">
        <div class="flex-1">
          <a class="text-xl">
            <img src={navLogo} alt="navLogo" />
          </a>
        </div>
        <div class="flex-none">
          <span>60,000,000,000</span>
          <span>🪙</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
