import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import './NavBar.css';

function NavBar() {

    //DAY6

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); 
    }, []);

    const signOutHandler = async () => {    
        try {
            await signOut(auth);
            alert("Sign out successfully!");
            navigate("/login"); 
        } catch (error) {
            console.error("Sign out error:", error.code, error.message);
            alert("Sign out failed: " + error.message);
        }
    };

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
                            {/* Day6 */}
                            {!user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Log in</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <button className="btn" onClick={signOutHandler}>Logout</button>
                                </li>
                            )}
                        </ul>
                            {/* Day5 */}
                        <li className="nav-item text-light" id="Fav">
                            <NavLink className="nav-link" to="/favmovies">
                                <i className="bi bi-suit-heart-fill"></i> <strong>{favouriteMovies.length} </strong>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
