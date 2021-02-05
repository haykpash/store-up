import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}
const itemsPriceFromStorage = localStorage.getItem('orderSummary')
  ? JSON.parse(localStorage.getItem('orderSummary'))
  : {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
    orderSummary: itemsPriceFromStorage,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, item]
      }
    },

    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.product !== action.payload
      )
    },
    cartSaveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
    },
    cartSavePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
    },

    cartSaveOrderSummary: (state, action) => {
      const decimalsFormater = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
      }

      const itemsPrice = decimalsFormater(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )

      const shippingPrice = decimalsFormater(itemsPrice > 100 ? 5 : 15 ? 0 : 0)
      const taxPrice = decimalsFormater(Number((0.12 * itemsPrice).toFixed(2)))
      const totalPrice = (
        Number(itemsPrice) +
        Number(shippingPrice) +
        Number(taxPrice)
      ).toFixed(2)
      const orderSummary = {
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      }
      state.orderSummary = orderSummary
      localStorage.setItem('orderSummary', JSON.stringify(orderSummary))
    },
  },
})

export const {
  addItem,
  deleteItem,
  cartSaveShippingAddress,
  cartSavePaymentMethod,
  cartSaveOrderSummary,
} = cartSlice.actions

/***************************************/
/*  export default cartSlice.reducer   */
/***************************************/

//------------Action Creators-------------

export const addInCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch(
    addItem({
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    })
  )

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const deleteFromCart = (id) => (dispatch, getState) => {
  dispatch(deleteItem(id))

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch(cartSaveShippingAddress(data))

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch(cartSavePaymentMethod(data))
  dispatch(cartSaveOrderSummary())

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
