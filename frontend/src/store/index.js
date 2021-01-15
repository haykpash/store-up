import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import productsListReducer from './slices/productSlice'
import productDetailsReducer from './slices/detailsSlice'
import cartReducer from './slices/cartSlice'

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []

// const initialState = {
//   cart: { cartItems: 'cartItemsFromStorage' },
// }

const store = configureStore({
  reducer: {
    //initialState,
    productList: productsListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },

  middleware: [...getDefaultMiddleware()],
})

export default store
