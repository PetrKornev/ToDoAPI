import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: ''
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.input = action.payload;
    }
  }
});

export const { changeInput } = inputSlice.actions;
export default inputSlice.reducer;
