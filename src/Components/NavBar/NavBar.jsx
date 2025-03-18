import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './NavBar.css';

function NavBar() {
    const favouriteMovies = useSelector((state) => state.favMovies.favourites);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <strong>Jassy Movies</strong>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto"> 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Log in</NavLink>
                            </li>
                        </ul>
                            <li className="nav-item text-light" id="Fav">
                                <NavLink className="nav-link" to="/favmovies"><i className="bi bi-suit-heart-fill"></i> <strong>{favouriteMovies.length} </strong></NavLink>
                            </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
