import { Menu, X } from "lucide-react";
import { useState } from "react";

// menu items for dynamic navbar name path and id
const menuItems = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const CNavbar = () => {
  // menu show and hide state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // menu items show and hide on small and medium screens
  const items = menuItems.map((item) => (
    <li key={item.id}>
      <a href={item.path}>{item.name}</a>
    </li>
  ));

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* fix navbar */}
      {/* <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul> */}

      <span className="flex items-center gap-2">
        <span
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? <Menu /> : <X />}
        </span>
        <ul className={`md:hidden absolute duration-1000 bg-gray-800 text-white px-4  ${isMenuOpen ? "left-10 top-18" : "left-10 -top-48"}`}>{items}</ul>

        <h3>My App</h3>
      </span>

      {/* dynamic navbar */}
      <ul className="md:flex hidden gap-4">{items}</ul>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </nav>
  );
};

export default CNavbar;
