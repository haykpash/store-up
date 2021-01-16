import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const listProductsDetails = (id) => async (dispatch) => {
  dispatch(detailsRequest())
  try {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(detailsSuccess(data))
  } catch (error) {
    dispatch(
      detailsSuccess(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

const initialState = { product: {} }

export const productDetaileSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    detailsRequest: (state, action) => {
      state.loading = true
    },
    detailsSuccess: (state, action) => {
      state.loading = false
      state.product = action.payload
    },
    detailsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  detailsRequest,
  detailsSuccess,
  detailsFail,
} = productDetaileSlice.actions

export const productDetailsSelector = (state) => state.productDetails

export default productDetaileSlice.reducer
