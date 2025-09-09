import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white p-3">
      <h4 className="text-center">All Rights Reserved &copy;Abhishek Paul</h4>
      <p className="text-center text-white mt-3">
        <Link to="/about" style={{ color: "white" }}>
          About Us
        </Link>{" "}
        |{" "}
        <Link to="/contact" style={{ color: "white" }}>
          Contact Us
        </Link>
      </p>
    </div>
  );
};

export default Footer;
