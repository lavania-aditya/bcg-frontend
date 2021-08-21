import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="text">
        <h1>404</h1>
        <p>We're sorry but it looks like that page doesn't exist anymore.</p>
      </div>
      <div className="action">
        <Link to="/">
          <button className="btn btn-info">Go To Home Page</button>
        </Link>
      </div>
    </div>
  );
};
