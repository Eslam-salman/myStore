import React from "react";
import { Link } from "react-router-dom";

export default function CustomizedBreadcrumbs() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light mt-4 p-4 ">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav navbar-center ">
          <Link to="/" className="nav-item nav-link active">
            <h5> Home</h5>
          </Link>

          <Link to="/shop" className="nav-item nav-link">
            <h5>Shop</h5>
          </Link>

          <Link to="/blog" className="nav-item nav-link">
            <h5> Blog</h5>
          </Link>

          <Link to="/contact" className="nav-item nav-link">
            <h5>Contact</h5>
          </Link>
        </div>
      </div>
    </nav>
  );
}
