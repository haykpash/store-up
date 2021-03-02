import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const orderPaySlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    orderPayRequest: (state) => {
      state.loading = true
    },
    orderPaySuccess: (state) => {
      state.loading = false
      state.success = true
    },
    orderPayFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    orderPayReset: () => {
      return {}
    },
  },
})

export const {
  orderPayRequest,
  orderPaySuccess,
  orderPayFail,
  orderPayReset,
} = orderPaySlice.actions

//--------------Action Creators-----------//

export const payOrder = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(orderPayRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    )

    dispatch(orderPaySuccess(data))
  } catch (error) {
    dispatch(
      orderPayFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
