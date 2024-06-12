import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';
import themeReducer from './features/theme/themeSlice';
const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer, theme: themeReducer },
});

export default store;
