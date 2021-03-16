import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productSlice = createSlice({
  name: 'productList',
  initialState: { products: [] },
  reducers: {
    getRequest: (state) => {
      state.loading = true
    },
    getSuccess: (state, action) => {
      state.loading = false
      state.products = action.payload.products
      state.pages = action.payload.pages
      state.page = action.payload.page
    },
    getFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { getRequest, getSuccess, getFail } = productSlice.actions

//-----------Action Creators--------//

export const listProducts = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  // dispatch(getRequest())
  try {
    dispatch(getRequest())
    const { data } = await axios.get(
      `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
    )

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

//---------------Other Version--------------////

// export const listProducts = createAsyncThunk(
//   'productList/listProducts',
//   async () => {
//     const { data } = await axios.get('/api/products')
//     return data
//   }
// )
// const initialState = { products: [] }

// export const productSlice = createSlice({
//   name: 'productList',
//   initialState,
//   extraReducers: {
//     [listProducts.pending]: (state, action) => {
//       state.loading = true
//       //action.products = []
//     },
//     [listProducts.fulfilled]: (state, action) => {
//       state.loading = false
//       state.products = action.payload
//     },
//     [listProducts.rejected]: (state, action) => {
//       state.loading = false
//       state.error = action.payload
//     },
//   },
// })

//export default productSlice.reducer
