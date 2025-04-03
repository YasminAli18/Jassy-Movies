import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../AxiosInstance/instance";

export const fetchMovies = createAsyncThunk("movies/getMovies", async () => { 
    const res = await instance.get("/movie/popular"); 
    return res.data.results; 
});

export const moviesSlice = createSlice({ 
    name: "movies", 
    initialState: { movies: [] },
   
    extraReducers: (builder) => { 
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => { 
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {   
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default moviesSlice.reducer;
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import instance from "../../AxiosInstance/instance";

// export const moviesActions = createAsyncThunk("movies/getMovies",async () => { 
//     const res = await instance .get("/movies/popular"); 
//     return res.data; })
// export const moviesSlice= createSlice({ 
//     name: "movies", 
//     initialState: { movies: [] },
//     extraReducers:(builder) => { 
//         builder.addCase(moviesActions.fulfilled, (state, action) => { 
//             state.movies = action.payload; 
//         });
//          builder.addCase(moviesActions.rejected ,(err) => {   
//             console.log(err);
//     });
//   }
// });
// export default moviesSlice.reducer;

