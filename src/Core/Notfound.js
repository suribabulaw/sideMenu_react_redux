import React from "react";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/">home</Link>
    </div>
  );
};

export default Notfound;
