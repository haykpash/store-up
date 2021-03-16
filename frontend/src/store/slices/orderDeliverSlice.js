import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const orderDeliverSlice = createSlice({
  name: 'orderDeliver',
  initialState: {},
  reducers: {
    orderDeliverRequest: (state) => {
      state.loading = true
    },
    orderDeliverSuccess: (state) => {
      state.loading = false
      state.success = true
    },
    orderDeliverFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    orderDeliverReset: () => {
      return {}
    },
  },
})

export const {
  orderDeliverRequest,
  orderDeliverSuccess,
  orderDeliverFail,
  orderDeliverReset,
} = orderDeliverSlice.actions

//--------------Action Creators-----------//

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderDeliverRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/orders/${order._id}/deliver`,
      {},
      config
    )

    dispatch(orderDeliverSuccess(data))
  } catch (error) {
    dispatch(
      orderDeliverFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
