import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const listProducts = createAsyncThunk(
  'productList/listProducts',
  async (input, thunkAPI) => {
    thunkAPI.dispatch(getRequest())
    try {
      const { data } = await axios.get('/api/products')

      thunkAPI.dispatch(getSuccess(data))
    } catch (error) {
      thunkAPI.dispatch(
        getFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
    }
  }
)

const initialState = { products: [] }

export const productSlice = createSlice({
  name: 'productList',
  initialState,
  // {
  //   products: [],
  // },
  reducers: {
    getRequest: (state, action) => {
      state.loading = true
      //state.products = []
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

export const productListSelector = (state) => state.productList

export default productSlice.reducer
