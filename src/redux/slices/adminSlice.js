import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAdmin: false,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    }
    },
  },
);

export const {setAdmin} = userSlice.actions;

export default userSlice.reducer;
