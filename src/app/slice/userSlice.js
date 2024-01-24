import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
    logout: (state) => {
        state.value = null;
        localStorage.removeItem("access_token")
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer