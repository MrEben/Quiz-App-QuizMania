import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const Submitted = () => {
  return (
    <div>
      {" "}
      <div className="submitted-div">
        <FaCheck />
        <h1>Submitted</h1>
        <h3>
          Go to{" "}
          <Link style={{ color: "blue" }} to="/">
            Home
          </Link>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Submitted;
