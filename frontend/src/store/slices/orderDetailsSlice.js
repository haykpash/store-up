import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const orderDetailsSlice = createSlice({
  name: 'order',
  initialState: {
    loading: true,
    orderItems: [],
    shippingAddress: {},
    order: {},
  },
  reducers: {
    orderDetailsRequest: (state) => {
      state.loading = true
    },
    orderDetailsSuccess: (state, action) => {
      state.loading = false
      state.order = action.payload
    },
    orderDetailsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const {
  orderDetailsRequest,
  orderDetailsSuccess,
  orderDetailsFail,
} = orderDetailsSlice.actions

//--------------Action Creators-----------//

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderDetailsRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/${id}`, config)

    dispatch(orderDetailsSuccess(data))
  } catch (error) {
    dispatch(
      orderDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
