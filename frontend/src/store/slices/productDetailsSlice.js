import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: { product: { reviews: [] } },
  reducers: {
    detailsRequest: (state) => {
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

const {
  detailsRequest,
  detailsSuccess,
  detailsFail,
} = productDetailsSlice.actions

//--------------Action Creators-----------//

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch(detailsRequest())

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(detailsSuccess(data))
  } catch (error) {
    dispatch(
      detailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
