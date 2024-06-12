import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
  colorTheme: 'bg-[#141010]',
  //    light bg-gray-100
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      const theme = state.theme;
      state.theme = theme === 'dark' ? 'light' : theme;
      state.colorTheme = theme === 'dark' ? 'white' : state.colorTheme;
    },
    changeColorTheme(state, action) {
      state.colorTheme = action.payload;
    },
  },
});

export const { changeColorTheme, changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
