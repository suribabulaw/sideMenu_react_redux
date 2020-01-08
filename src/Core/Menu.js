import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "red" };
  } else {
    return { color: "blue" };
  }
};
const Menu = ({ history }) => {
  return (
    <React.Fragment>
      <div>
      <ul className="nav">
        <li className="nav_item">
          <Link className="nav_link" style={isActive(history, "/")} to="/">
           <FaBeer/> About
          </Link>
        </li>
        <li className="nav_item">
          <Link
            style={isActive(history, "/about")}
            className="nav_link"
            to="/about"
          >
            about
          </Link>
        </li>
        <li className="nav_item">
          <Link
            style={isActive(history, "/singin")}
            className="nav_link"
            to="/singin"
          >
            singin
          </Link>
        </li>
        <li className="nav_item">
          <Link
            style={isActive(history, "/singup")}
            className="nav_link"
            to="/singup"
          >
            singup
          </Link>
        </li>
      </ul>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Menu);
