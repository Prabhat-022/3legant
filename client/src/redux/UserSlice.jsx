import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  input:""
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserLogin: (state, action) => {
      state.user = action.payload
    },
    setInput: (state, action) => {
      state.input = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { setuserLogin, logout, setInput } = UserSlice.actions

export default UserSlice.reducer