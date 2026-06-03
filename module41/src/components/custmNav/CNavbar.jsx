// menu items for dynamic navbar name path and id
const menuItems = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5 , name: "Contact", path: "/contact" },
];

const CNavbar = () => {
  return (
    <nav>
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

      {/* dynamic navbar */}
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CNavbar;
