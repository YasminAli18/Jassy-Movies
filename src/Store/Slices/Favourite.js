// store/slices/FavMovies.js
import { createSlice } from "@reduxjs/toolkit";

const favMoviesSlice = createSlice({
    name: "favMovies",
    initialState: {
        favourites: [], 
    },
    reducers: {
        toggleFav: (state, action) => {
            const movie = action.payload;
            const foundMovie = state.favourites.find(fav => fav.id === movie.id);
        
            if (foundMovie) {
                state.favourites = [...state.favourites.filter(fav => fav.id !== movie.id)]; 
            } else {
                state.favourites = [...state.favourites, movie]
            }
        
            // console.log("Updated Favorites:", JSON.parse(JSON.stringify(state.favourites))); 
        },
    },
});

export const { toggleFav } = favMoviesSlice.actions;
export default favMoviesSlice.reducer;