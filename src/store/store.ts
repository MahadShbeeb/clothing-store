import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import {authReducer} from "./authSlice"
import { UnknownAction } from 'redux'

const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth: authReducer,
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,UnknownAction>