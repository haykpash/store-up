import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const orderListSlice = createSlice({
  name: 'order',
  initialState: { orders: [] },
  reducers: {
    orderListRequest: (state) => {
      state.loading = true
    },
    orderListSuccess: (state, action) => {
      state.loading = false
      state.orders = action.payload
    },
    orderListFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  orderListRequest,
  orderListSuccess,
  orderListFail,
} = orderListSlice.actions

//--------------Action Creators-----------//

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch(orderListRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders`, config)

    dispatch(orderListSuccess(data))
  } catch (error) {
    dispatch(
      orderListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
