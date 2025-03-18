import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

function MovieDetails() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]); 
    const [currentMovie, setCurrentMovie] = useState();
    const [currentIndex, setCurrentIndex] = useState(-1); 

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c94b800b13b9b455a5d91c9b54e821a3")
            .then((res) => {
                setMovies(res.data.results);

                const foundIndex = res.data.results.findIndex(movie => movie.id.toString() === id);
                if (foundIndex !== -1) {
                    setCurrentMovie(res.data.results[foundIndex]);
                    setCurrentIndex(foundIndex);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 

    const handlePagination = (newIndex) => {
        if (newIndex >= 0 && newIndex < movies.length) {
            navigate(`/movie/${movies[newIndex].id}`);
        }
    };

    return (
        <div className="movie-details-container">
            {currentMovie ? (
                <div className="movie-card">
                    <div className="movie-image">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
                            alt={currentMovie.title}
                        />
                    </div>
                    <div className="movie-info">
                        <h1>{currentMovie.title}</h1>
                        <p>{currentMovie.overview}</p>
                        <p><strong><span>Release Date:</span></strong> {currentMovie.release_date}</p>
                        <p><strong><span>Rating:</span></strong>⭐{currentMovie.vote_average}</p>

                        <div className="pagination-buttons d-flex">
                            <button
                                className="btn"
                                onClick={() => handlePagination(currentIndex - 1)}
                                disabled={currentIndex === 0}
                            >
                                <strong>Previous</strong>
                            </button>
                            <button
                                className="btn"
                                onClick={() => handlePagination(currentIndex + 1)}
                                disabled={currentIndex === movies.length - 1}
                            >
                                <strong>Next</strong>
                            </button>
                        </div>

                        <button className="Bbtn" onClick={() => navigate('/Movies')}><strong>Back</strong></button>
                    </div>
                </div>
            ) : (
                <h3 className="loading-text">Loading...</h3>
            )}
        </div>
    );
}

export default MovieDetails;
