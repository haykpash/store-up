import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userUpdateProfileSlice = createSlice({
  name: 'userUpdate',
  initialState: {},
  reducers: {
    userUpdateProfileRequest: (state) => {
      state.loading = true
    },
    userUpdateProfileSuccess: (state, action) => {
      state.loading = false
      state.success = true
      state.userInfo = action.payload
    },
    userUpdateProfileFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const {
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
} = userUpdateProfileSlice.actions

//-----------Action Creators----------//

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateProfileRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/profile`, user, config)

    dispatch(userUpdateProfileSuccess(data))
  } catch (error) {
    dispatch(
      userUpdateProfileFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
