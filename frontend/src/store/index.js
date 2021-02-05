import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './slices/productSlice'
import { productDetaileSlice } from './slices/detailsSlice'
import { cartSlice } from './slices/cartSlice'
import { loginSlice } from './slices/userSlice'
import { registerSlice } from './slices/registerSlice'
import { userDetailsSlice } from './slices/userDetailsSlice'
import { userUpdateProfileSlice } from './slices/updateProfileSlice'
import { orderSlice } from './slices/orderSlice'

const store = configureStore({
  reducer: {
    productList: productSlice.reducer,
    productDetails: productDetaileSlice.reducer,
    cart: cartSlice.reducer,
    userLogin: loginSlice.reducer,
    userRegister: registerSlice.reducer,
    userDetails: userDetailsSlice.reducer,
    userUpdateProfile: userUpdateProfileSlice.reducer,
    order: orderSlice.reducer,
  },
  //middleware: [...getDefaultMiddleware()],
})

export default store
