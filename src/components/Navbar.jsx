import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/search">Search</Link>
    <Link to="/filters">Filters</Link>
  </nav>
);

export default Navbar;
