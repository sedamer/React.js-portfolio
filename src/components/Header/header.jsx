import "./header.scss";

import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__content__nav">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/aboutMe">About Me</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/hobies">Hobbies</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </header>
  );
}
