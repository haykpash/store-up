import { configureStore } from '@reduxjs/toolkit'
import productListReducer from '../slices/productSlice'

const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
})

export default store
