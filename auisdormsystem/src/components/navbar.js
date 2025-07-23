import "./navbar.css"
import navbarLogo from "../assets/auisLogo.png";
import profileIcon from "../assets/profileIcon.png";

function navbar() {
  return (
    <nav className="navbar">
        <img src={navbarLogo} className="navbar-logo" alt="logo" />
        <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Book a Room</a></li>
            <li><a href="/">Check in</a></li>
            <li><a href="/">Check out</a></li>
            <li><a href="/">Keys</a></li>
        </ul>
        <img src={profileIcon} className="profile-logo" alt="profile" />
    </nav>
  );
}

export default navbar;
