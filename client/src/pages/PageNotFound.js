import React from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Page you are looking for is not Found!!!"}>
      <div className="container text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Oops! Page Not Found</h2>
        <p className="lead mb-4">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <NavLink to="/" className="btn btn-primary btn-lg">
          Go Back Home
        </NavLink>
      </div>
    </Layout>
  );
};

export default PageNotFound;
