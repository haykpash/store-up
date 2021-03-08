import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './slices/productSlice'
import { productDetaileSlice } from './slices/detailsSlice'
import { cartSlice } from './slices/cartSlice'
import { loginSlice } from './slices/userSlice'
import { registerSlice } from './slices/registerSlice'
import { userDetailsSlice } from './slices/userDetailsSlice'
import { userUpdateProfileSlice } from './slices/updateProfileSlice'
import { orderSlice } from './slices/orderSlice'
import { orderDetailsSlice } from './slices/orderDetailsSlice'
import { orderPaySlice } from './slices/orderPaySlice'
import { orderListMySlice } from './slices/orderListMySlice'
import { userListSlice } from './slices/userListSlice'
import { userDeleteSlice } from './slices/userDeleteSlice'
import { userUpdateSlice } from './slices/userUpdateSlice'

const store = configureStore({
  reducer: {
    productList: productSlice.reducer,
    productDetails: productDetaileSlice.reducer,
    cart: cartSlice.reducer,
    userLogin: loginSlice.reducer,
    userRegister: registerSlice.reducer,
    userDetails: userDetailsSlice.reducer,
    userUpdateProfile: userUpdateProfileSlice.reducer,
    userList: userListSlice.reducer,
    userDelete: userDeleteSlice.reducer,
    userUpdate: userUpdateSlice.reducer,
    order: orderSlice.reducer,
    orderDetails: orderDetailsSlice.reducer,
    orderPay: orderPaySlice.reducer,
    orderListMy: orderListMySlice.reducer,
  },
  //middleware: [...getDefaultMiddleware()],
})

export default store
