import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import productsListReducer from './slices/productSlice'
import productDetailsReducer from './slices/detailsSlice'

const store = configureStore({
  reducer: {
    productList: productsListReducer,
    productDetails: productDetailsReducer,
    middleware: [...getDefaultMiddleware()],
  },
})

export default store
