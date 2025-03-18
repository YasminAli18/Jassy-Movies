import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const nav = useNavigate();

    return (
        <>
            <header className="hero">
                <div className="overlay">
                    <div>
                        <h1 id="hero-title" className="mb-5 fade-in">Jassy Movies</h1>
                        <button className="custom-btn" onClick={() => nav('/Movies')}>
                            Go to Movies
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Home;
