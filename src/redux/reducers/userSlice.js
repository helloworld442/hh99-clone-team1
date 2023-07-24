import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    email:null,
    nickname:null,
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOGIN_USER: (state, action) => {
      state.user.email=action.payload.email
      state.user.nickname=action.payload.nickname
      localStorage.setItem('accessToken', action.payload.accesstoken);
      localStorage.setItem('refreshToken', action.payload.refreshtoken);
    },
    AUTH_USER: (state, action) => {
      state.user.email=action.payload.email
      state.user.nickname=action.payload.nickname
    },
    LOGOUT_USER: (state) => {
      state.user.email=null
      state.user.nickname=null
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
})

export const { LOGIN_USER,AUTH_USER,LOGOUT_USER } = userSlice.actions

export default userSlice.reducer