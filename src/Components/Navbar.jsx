import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">EMS</div>
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/add">Add Employee</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
