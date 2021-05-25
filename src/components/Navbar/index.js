import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { storeTypes } from "../../types/storeTypes";

export default function Navbar() {
  const { store, dispatch } = useContext(StoreContext);
  const history = useHistory();
  const handleLogout = () => {
    dispatch({
      type: storeTypes.logout,
    });
    history.replace("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          Mi tienda ReactJS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <span className="text-white">{store.user?.email}</span>
            </li>
            <li className="nav-item">
              {store.user?.email && (
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  <span> Logout</span>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
