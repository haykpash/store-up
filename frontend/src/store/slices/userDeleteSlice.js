import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userDeleteSlice = createSlice({
  name: 'userDetails',
  initialState: {},
  reducers: {
    userDeleteRequest: (state) => {
      state.loading = true
    },
    userDeleteSuccess: (state, action) => {
      state.loading = false
      state.success = true
    },
    userDeleteFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteFail,
} = userDeleteSlice.actions

//-----------Action Creators----------//

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDeleteRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/users/${id}`, config)

    dispatch(userDeleteSuccess())
  } catch (error) {
    dispatch(
      userDeleteFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
