import './Movies.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFav } from "../../Store/Slices/Favourite";
//day6
import { fetchMovies } from "../../Store/Slices/Movies";

function Movies() {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    
    const { movies, status, error } = useSelector(state => state.movies);
    const favorites = useSelector(state => state.favMovies.favourites);

    useEffect(() => {
        //day6
         {
            dispatch(fetchMovies());
        }
    }, []);

    const handleToggleFav = (movie) => {
        dispatch(toggleFav(movie));
    };

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredMovies = movies.filter((movie) => 
        movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className="movies-container">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for a movie..."
                        value={searchText}
                        onChange={handleSearch}
                    />
                </div>
                <div className="container mt-4">
                    <h2 className="text-center mb-4"><strong>Popular Movies</strong></h2>
                    
                    {status === "loading" && <p>Loading movies...</p>}
                    {status === "failed" && <p>Error: {error}</p>}

                    <div className="row">
                        {filteredMovies.map((mov) => (
                            <div key={mov.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
                                <div className="card">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                                        className="card-img-top"
                                        alt={mov.title}
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">{mov.title}</h3>
                                        <p className="card-text">{mov.overview.substring(0, 100)}...</p>
                                        
                                        <button 
                                            className={`custom-btn mb-4 ${favorites.find(fav => fav.id === mov.id) ? "active" : ""}`}
                                            onClick={() => handleToggleFav(mov)}
                                        >   
                                            <i className="bi bi-suit-heart-fill"></i> 
                                        </button>

                                        <Link to={`/movie/${mov.id}`} className="custom-btn mx-2">
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;
// // import axios from "axios";
// import './Movies.css';
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFav } from "../../Store/Slices/Favourite";
// import { moviesActions } from "../../Store/Slices/Movies";
// import instance from "../../AxiosInstance/instance";    


// function Movies() {
//     const [movies, setMovies] = useState([]);
//     const [searchText, setSearchText] = useState("");
//     //Day5
//     // const dispatch = useDispatch();
//     const favorites = useSelector(state => state.favMovies.favourites);
//     //Day6
//     const Movies = useSelector(state => state.movies.movies);
//     const dispatch = useDispatch();
    

//     useEffect(() => {
//         //day6
//         dispatch(moviesActions());
//         // instance
//         //     .get()
//         //     .then((res) => setMovies(res.data.results))
//         //     .catch((err) => console.log(err));
//     }, []);
//     //Day5
//     const handleToggleFav = (movie) => {
//         dispatch(toggleFav(movie));
//     };

//     const handleSearch = (event) => {
//         setSearchText(event.target.value);
//     };

//     const filteredMovies = movies.filter((movie) => 
//         movie.title.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <>
//             <div className="movies-container">
//                 <div className="search-container">
//                  <input
//                     type="text"
//                     className="search-input"
//                     placeholder=" Search for a movie..."
//                     value={searchText}
//                     onChange={handleSearch}
//                  />
//                 </div>
//                 <div className="container mt-4">
//                     <h2 className="text-center mb-4"><strong>Popular Movies</strong></h2>
//                     <div className="row">
//                     {filteredMovies.map((mov) => (
//                     <div key={mov.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
//                         <div className="card">
//                             <img
//                                 src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
//                                 className="card-img-top"
//                                 alt={mov.title}
//                             />
//                             <div className="card-body">
//                                 <h3 className="card-title">{mov.title}</h3>
//                                 <p className="card-text">{mov.overview.substring(0, 100)}...</p>
//                                 {/* Day5 */}
//                                 <button 
//                                     className={`custom-btn mb-4 ${favorites.find(fav => fav.id === mov.id) ? "active" : ""}`}
//                                     onClick={() => handleToggleFav(mov)} >   
//                                     <i className="bi bi-suit-heart-fill"></i> 
//                                 </button>
//                                 <Link to={`/movie/${mov.id}`} className="custom-btn mx-2">
//                                       Details
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Movies;


// // import axios from "axios";
// // import './Movies.css'
// // import { Link } from "react-router-dom";
// // import React, { useEffect, useState } from "react";

// // function Movies() {
// //     const [movies, setMovies] = useState([]);
// //     const [searchText, setSearchText] = useState("");
// //     const [favorites, setFavorites] = useState([]);

// //     useEffect(() => {
// //         axios
// //             .get(
// //                 "https://api.themoviedb.org/3/movie/popular?api_key=c94b800b13b9b455a5d91c9b54e821a3"
// //             )
// //             .then((res) => {
// //                 setMovies(res.data.results);
// //             })
// //             .catch((err) => {
// //                 console.log(err);
// //             });
// //     }, []);

// //         const addToFavorites = (movie) => {
// //         const storedFavs = JSON.parse(localStorage.getItem("favMovies")) || [];
// //         const isAlreadyAdded = storedFavs.find(fav => fav.id === movie.id);

// //         let updatedFavMovies;
// //         if (!isAlreadyAdded) {
// //             updatedFavMovies = [...storedFavs, movie];
// //         } else {
// //             updatedFavMovies = storedFavs.filter(fav => fav.id !== movie.id); 
// //         }

// //         localStorage.setItem("favMovies", JSON.stringify(updatedFavMovies));
// //         setFavorites(updatedFavMovies);
// //     };

// //     const handleSearch = (event) => {
// //         setSearchText(event.target.value);
// //     };

// //     const filteredMovies = movies.filter((movie) => 
// //         movie.title.toLowerCase().includes(searchText.toLowerCase())
// //     );

// //     return (
// //         <>
// //             <div className="movies-container">
// //                 <div className="search-container">
// //                  <input
// //                     type="text"
// //                     className="search-input"
// //                     placeholder=" Search for a movie..."
// //                     value={searchText}
// //                     onChange={handleSearch}
// //                  />
// //                 </div>
// //                 <div className="container mt-4">
// //                     <h2 className="text-center mb-4"><strong>Popular Movies</strong></h2>
// //                     <div className="row">
// //                     {filteredMovies.map((mov) => (
// //                     <div key={mov.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
// //                         <div className="card">
// //                             <img
// //                                 src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
// //                                 className="card-img-top"
// //                                 alt={mov.title}
// //                             />
// //                             <div className="card-body">
// //                                 <h3 className="card-title">{mov.title}</h3>
// //                                 <p className="card-text">{mov.overview.substring(0, 100)}...</p>
// //                                 <button 
// //                                     className={`custom-btn mb-4 ${favorites.some(fav => fav.id === mov.id) ? "active" : ""}`}
// //                                     onClick={() => addToFavorites(mov)} >   
// //                                     <i class="bi bi-suit-heart-fill"></i> 
// //                                 </button>
// //                                 <Link to={`/movie/${mov.id}`} className="custom-btn mx-2">
// //                                       Details
// //                                 </Link>
                                
// //                             </div>
// //                         </div>
// //                     </div>
// //                     ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default Movies;



