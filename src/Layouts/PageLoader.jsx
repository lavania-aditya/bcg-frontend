import React from "react";

export const PageLoader = () => {
  return (
    <div className="page-loader">
      <h2>Fetching Data from Server, Please Wait ...</h2>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
