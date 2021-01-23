import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDetailsRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch(userDetailsSuccess(data))
  } catch (error) {
    dispatch(
      userDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: { user: {} },
  reducers: {
    userDetailsRequest: (state) => {
      state.loading = true
    },
    userDetailsSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    userDetailsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
} = userDetailsSlice.actions

export default userDetailsSlice.reducer
