import { configureStore } from '@reduxjs/toolkit'
import productsListReducer from './slices/productSlice'
import productDetailsReducer from './slices/detailsSlice'
import cartReducer from './slices/cartSlice'
import userLoginReducer from './slices/userSlice'
import userRegisterReducer from './slices/registerSlice'
import userDetailsReducer from './slices/userDetailsSlice'
import userUpdateProfileReducer from './slices/updateProfileSlice'

const store = configureStore({
  reducer: {
    productList: productsListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
  },
})

export default store
