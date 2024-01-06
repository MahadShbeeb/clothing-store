import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut } from 'firebase/auth';
import { firebaseAuth } from '../firebase/BaseConfig';
import { AppThunk } from '../store/store';


export const signUpUser= createAsyncThunk(
  'user/signupuser',
  async (userCredentials : AuthUser) => {
    const result = await createUserWithEmailAndPassword(firebaseAuth, userCredentials.email, userCredentials.password);
    const {user} = result
    localStorage.setItem('auth',JSON.stringify(user.refreshToken))
    return user
  }
)

export const loginUser= createAsyncThunk(
  'user/loginuser',
  async (userCredentials : AuthUser) => {
    const result = await signInWithEmailAndPassword(firebaseAuth, userCredentials.email, userCredentials.password);
    const { user } = result;
    localStorage.setItem('auth',JSON.stringify(result.user.refreshToken))
    return user
  }
)

export const logoutUser =(): AppThunk => async (dispatch)=> {
    await signOut(firebaseAuth);
    dispatch(logout());
};

export interface AuthUser {
  email: string;
  password: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{ 
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { login,signup,logout} = authSlice.actions;

export const authReducer =  authSlice.reducer;