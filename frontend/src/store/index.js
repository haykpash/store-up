import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import productsListReducer from './slices/productSlice'
import productDetailsReducer from './slices/detailsSlice'
import cartReducer from './slices/cartSlice'
import userLoginReducer from './slices/userSlice'
import userRegisterReducer from './slices/registerSlice'

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
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  },

  middleware: [...getDefaultMiddleware()],
})

export default store
