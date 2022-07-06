import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
