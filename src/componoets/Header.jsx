import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="wrap">
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <button className="header-btn">Tap me</button>
      </div>
    </header>
  );
}
export default Header;
