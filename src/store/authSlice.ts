import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  email: string;
  password: string;
}

export const loginUser= createAsyncThunk(
  'user/loginUser',
  async (userCredentials : User) => {
    const request = await axios.post('https://fakestoreapi.com/auth/login',{
                username: "mor_2314",
                password: "83r5^_"
            })
    const respond = await request.data.token
    localStorage.setItem('auth',JSON.stringify(respond))
    return respond;
  }
)

export interface Auth {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: Auth = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(loginUser.pending, (state) => {
      state.isAuthenticated = true
      state.user = null
    }).addCase(loginUser.fulfilled, (state , action) => {
      state.isAuthenticated = true
      state.user = action.payload
    }).addCase(loginUser.rejected, (state) => {
      state.isAuthenticated = false
      state.user = null
    })
  }
});

export const authReducer =  authSlice.reducer;