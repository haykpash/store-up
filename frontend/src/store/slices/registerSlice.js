import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { loginSuccess } from './userSlice'

export const registerSlice = createSlice({
  name: 'userRegister',
  initialState: {},
  reducers: {
    registerRequest: (state) => {
      state.loading = true
    },
    registerSuccess: (state, action) => {
      state.loading = false
      state.userInfo = action.payload
    },
    registerFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { registerRequest, registerSuccess, registerFail } = registerSlice.actions

//-----------Action Creators----------//

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(registerRequest())

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch(registerSuccess(data))
    dispatch(loginSuccess(data))

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch(
      registerFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
