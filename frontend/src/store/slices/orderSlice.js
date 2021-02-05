import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    orderRequest: (state) => {
      state.loading = true
    },
    orderSuccess: (state, action) => {
      state.loading = false
      state.success = true
      state.order = action.payload
    },
    orderFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { orderRequest, orderSuccess, orderFail } = orderSlice.actions

//--------------Action Creators-----------//

export const createOrder = (order) => async (dispatch, getState) => {
  console.log(order)
  try {
    dispatch(orderRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/orders`, order, config)

    dispatch(orderSuccess(data))
  } catch (error) {
    dispatch(
      orderFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
