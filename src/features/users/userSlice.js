import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { getState }) => {
    const { currentPage, genderFilter } = getState().users;
    const response = await axios.get(
      `https://randomuser.me/api/?page=${currentPage}&results=12&gender=${genderFilter}`
    );
    return response.data.results;
  }
);

const initialState = {
  userList: [],
  genderFilter: "",
  searchQuery: "",
  currentPage: 1,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
    },

    setCurrentPage : (state, action)=>{
        state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
  },
});

export const {setGenderFilter, setCurrentPage} = userSlice.actions;

export default userSlice.reducer;
