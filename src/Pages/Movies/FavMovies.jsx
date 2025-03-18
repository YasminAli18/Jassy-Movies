import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../../Store/Slices/Favourite";
import './FavMovies.css';

function FavMovies() {
  const movies = useSelector(state => state.favMovies.favourites);
  const dispatch = useDispatch();

  return (
    <>
      <div className="fav-movie-container">
        {movies.length > 0 ? (
          <div className="row">
            <h2 className="text-center text-white mb-4">Favorite Movies</h2>
            {movies.map((movie) => (
              <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
                <div className="card">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    className="card-img-top" 
                    alt={movie.title} 
                  />
                  <div className="card-body">
                    <h3 className="card-title">{movie.title}</h3>
                    <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                    <p><strong><span>Release Date:</span></strong> {movie.release_date}</p>
                    <p><strong><span>Rating:</span></strong>⭐{movie.vote_average}</p>
                    <button 
                      className="remove-btn" 
                      onClick={() => dispatch(toggleFav(movie))}
                    >
                     <strong> Remove</strong>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-white text-center">No Favorite Movies Added</h3>
        )}
      </div>
    </>
  );
}

export default FavMovies;

// import React, { useEffect, useState } from "react";
// import './FavMovies.css';

// function FavMovies() {
//   const [movies, setMovies] = useState([]);  

//   useEffect(() => {
//     const storedMovies = JSON.parse(localStorage.getItem("favMovies")) || [];  
//     setMovies(storedMovies);
//   }, []);

//   const removeFromFavorites = (movieId) => {
//     const updatedMovies = movies.filter(movie => movie.id !== movieId);  
//     setMovies(updatedMovies);
//     localStorage.setItem("favMovies", JSON.stringify(updatedMovies));
//   };

//   return (
//     <>  
//       <div className="fav-movie-container">
//         {movies.length > 0 ? (
//           <div className="row">  
//             <h2 className="text-center text-white mb-4">Favorite Movies</h2>
//             {movies.map((movie) => (
//               <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">  
//                 <div className="card">
//                   <img 
//                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//                     className="card-img-top" 
//                     alt={movie.title} 
//                   />
//                   <div className="card-body">
//                     <h3 className="card-title">{movie.title}</h3>
//                     <p className="card-text">{movie.overview.substring(0, 100)}...</p>
//                     <p><strong><span>Release Date:</span></strong> {movie.release_date}</p>
//                     <p><strong><span>Rating:</span></strong>⭐{movie.vote_average}</p>
//                     <button 
//                       className="remove-btn" 
//                       onClick={() => removeFromFavorites(movie.id)}
//                     >
//                      <strong> Remove</strong>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <h3 className="text-white text-center">No Favorite Movies Added</h3>  
//         )}
//       </div>
//     </>
//   );
// }

// export default FavMovies;

