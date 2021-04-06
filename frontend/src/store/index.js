import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './slices/productSlice'
import { productDetailsSlice } from './slices/productDetailsSlice'
import { productReviewCreateSlice } from './slices/productReviewSlice'
import { cartSlice } from './slices/cartSlice'
import { loginSlice } from './slices/userSlice'
import { registerSlice } from './slices/registerSlice'
import { userDetailsSlice } from './slices/userDetailsSlice'
import { userUpdateProfileSlice } from './slices/updateProfileSlice'
import { orderSlice } from './slices/orderSlice'
import { orderDetailsSlice } from './slices/orderDetailsSlice'
import { orderPaySlice } from './slices/orderPaySlice'
import { orderDeliverSlice } from './slices/orderDeliverSlice'
import { orderListMySlice } from './slices/orderListMySlice'
import { userListSlice } from './slices/userListSlice'
import { userDeleteSlice } from './slices/userDeleteSlice'
import { userUpdateSlice } from './slices/userUpdateSlice'
import { productDeleteSlice } from './slices/productDeleteSlice'
import { productCreateSlice } from './slices/productCreateSlice'
import { productUpdateSlice } from './slices/productUpdateSlice'
import { orderListSlice } from './slices/orderListSlice'
import { productTopRatedSlice } from './slices/productTopRatedSlice'

const store = configureStore({
  reducer: {
    productList: productSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    productDelete: productDeleteSlice.reducer,
    productCreate: productCreateSlice.reducer,
    productUpdate: productUpdateSlice.reducer,
    productReviewCreate: productReviewCreateSlice.reducer,
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
    orderDeliver: orderDeliverSlice.reducer,
    orderListMy: orderListMySlice.reducer,
    orderList: orderListSlice.reducer,
    productTopRated: productTopRatedSlice.reducer,
  },
})

export default store
