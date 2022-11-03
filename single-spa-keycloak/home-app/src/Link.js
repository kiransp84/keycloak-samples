import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function MyLink() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {" "}
            <li>
              {" "}
              <Link to={`app/my-account`}>View Profile</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
