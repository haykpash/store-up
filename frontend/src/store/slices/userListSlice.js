import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userListSlice = createSlice({
  name: 'userUpdate',
  initialState: { users: [] },
  reducers: {
    userListRequest: (state) => {
      state.loading = true
    },
    userListSuccess: (state, action) => {
      state.loading = false
      state.users = action.payload
    },
    userListFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    userListReset: (state) => {
      return []
    },
  },
})

export const {
  userListRequest,
  userListSuccess,
  userListFail,
  userListReset,
} = userListSlice.actions

//-----------Action Creators----------//

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch(userListRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users`, config)

    dispatch(userListSuccess(data))
  } catch (error) {
    dispatch(
      userListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
