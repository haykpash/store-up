import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  dispatch(getRequest())
  try {
    const { data } = await axios.get('/api/products')

    dispatch(getSuccess(data))
  } catch (error) {
    dispatch(
      getFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

const initialState = { products: [] }

export const productSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    getRequest: (state, action) => {
      state.loading = true
      action.products = []
    },
    getSuccess: (state, action) => {
      state.loading = false
      state.products = action.payload
    },
    getFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { getRequest, getSuccess, getFail } = productSlice.actions

export default productSlice.reducer
