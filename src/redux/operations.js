import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65f9eea93909a9a65b19aacf.mockapi.io";

export const getAllCampers = createAsyncThunk(
  "get/campers",
  async (campersCount, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=${campersCount}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

