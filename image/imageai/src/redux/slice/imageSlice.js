import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchImages = createAsyncThunk(
  "images/fetchImages",
  const asyncfunc = async () => {
    const response = await axios.get(
      "https://64c4f551c853c26efada564f.mockapi.io/cars",
    );
    console.log(response.data)
    return response.data;
  },
  asyncfunc()
);
export const imageSLice = createSlice({
  name: "images",
  initialState: {
    images: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.images = [];
      });
  },
});
