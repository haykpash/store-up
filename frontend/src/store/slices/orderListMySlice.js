import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const orderListMySlice = createSlice({
  name: 'order',
  initialState: { orders: [] },
  reducers: {
    orderListMyRequest: (state) => {
      state.loading = true
    },
    orderListMySuccess: (state, action) => {
      state.loading = false
      state.orders = action.payload
    },
    orderListMyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    orderListMyReset: (state) => {
      // return
      state.orders = []
    },
  },
})

export const {
  orderListMyRequest,
  orderListMySuccess,
  orderListMyFail,
  orderListMyReset,
} = orderListMySlice.actions

//--------------Action Creators-----------//

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch(orderListMyRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/myorders`, config)

    dispatch(orderListMySuccess(data))
  } catch (error) {
    dispatch(
      orderListMyFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
