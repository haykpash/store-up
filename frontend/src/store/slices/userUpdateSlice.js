import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { userDetailsSuccess } from './userDetailsSlice'

export const userUpdateSlice = createSlice({
  name: 'userDetails',
  initialState: { user: {} },
  reducers: {
    userUpdateRequest: (state) => {
      state.loading = true
    },
    userUpdateSuccess: (state) => {
      state.loading = false
      state.success = true
    },
    userUpdateFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    userUpdateReset: () => {
      return {}
    },
  },
})

export const {
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFail,
  userUpdateReset,
} = userUpdateSlice.actions

//-----------Action Creators----------//

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/${user._id}`, user, config)

    dispatch(userUpdateSuccess())
    dispatch(userDetailsSuccess(data))
  } catch (error) {
    dispatch(
      userUpdateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
