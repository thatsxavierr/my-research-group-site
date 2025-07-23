// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional, for styling
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news-and-research">News & Research</Link></li>
        <li><Link to="/resources-and-facilities">Resources & Facilities</Link></li>
        <li><Link to="/group-members">Group Members</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/memories">Memories</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
