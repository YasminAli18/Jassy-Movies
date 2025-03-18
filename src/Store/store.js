import { configureStore } from "@reduxjs/toolkit";
import favMoviesReducer from "./Slices/Favourite";

const store = configureStore({
    reducer: {
        favMovies: favMoviesReducer,
    },
});

export default store;