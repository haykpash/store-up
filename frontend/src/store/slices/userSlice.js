import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  try {
    //dispatch(loginRequest())

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    dispatch(loginSuccess(data))

    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch(
      loginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

export const logout = () => (dispatch) => {
  // localStorage.removeItem('userInfo')
  dispatch(logoutSuccses())
}

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

export const loginSlice = createSlice({
  name: 'userLogin',
  initialState: { userInfo: userInfoFromStorage },
  reducers: {
    // loginRequest: (state) => {
    //   state.loading = true
    // },
    loginSuccess: (state, action) => {
      //state.loading = false
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    loginFail: (state, action) => {
      //state.loading = false
      state.error = action.payload
    },
    logoutSuccses: (state) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    },
  },
})

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  logoutSuccses,
} = loginSlice.actions

export default loginSlice.reducer
