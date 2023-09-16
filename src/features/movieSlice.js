import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { apiKey, baseURL } from "../utlis/Constant";
import axios from "axios";


const initialState = {
    movies : [],
    loading: false,
    genres: []
}

export const fetchGenres = createAsyncThunk("netflix/genres", async()=> {
   const {data : {genres}} = await axios.get(`${baseURL}/genre/movie/list?api_key=${apiKey}`)
   console.log(genres)
   return genres;
})



const movieSlice = createSlice({
    name: "Netflix",
    initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action)=> {
        state.genres = action.payload;
        state.loading = true;
    })
  }
})


export const {} = movieSlice.actions;
export default movieSlice.reducer;