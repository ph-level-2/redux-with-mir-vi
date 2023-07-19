import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/add-to-cart/cartSlice';
import productReducer from './features/products/productSlice';
import { productsAPI } from './api/apiSlice';
import userReducer from './features/user/userSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
