import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Music Search</h1>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;