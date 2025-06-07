import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../entities/Product";

export interface Order {
  id: string;
  products: Product[];
  totalAmount: number;
  date: string;
}

export interface Orders {
  orders: Order[];
}

const ordersSlice = createSlice({
  name: "orders",
  initialState: { orders: [] } as Orders,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
