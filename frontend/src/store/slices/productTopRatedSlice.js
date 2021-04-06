import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productTopRatedSlice = createSlice({
  name: 'productTopRated',
  initialState: { products: [] },
  reducers: {
    productTopRequest: (state) => {
      state.loading = true
      state.products = []
    },
    productTopSuccess: (state, action) => {
      state.loading = false
      state.products = action.payload
    },
    productTopFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  productTopRequest,
  productTopSuccess,
  productTopFail,
  productTopReset,
} = productTopRatedSlice.actions

//--------------Action Creators-----------//

export const listTopProducts = () => async (dispatch, getState) => {
  try {
    dispatch(productTopRequest())

    const { data } = await axios.get(`/api/products/top`)

    dispatch(productTopSuccess(data))
  } catch (error) {
    dispatch(
      productTopFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
