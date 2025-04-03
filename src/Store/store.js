import { configureStore } from "@reduxjs/toolkit";
import favMoviesReducer from "./Slices/Favourite";
import movieReducer from "./Slices/Movies";

const store = configureStore({
    reducer: {
        favMovies: favMoviesReducer,
        movies: movieReducer,
    },
});

export default store;