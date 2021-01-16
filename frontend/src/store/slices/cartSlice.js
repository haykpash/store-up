import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = { cartItems: cartItemsFromStorage }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          cartItems: [...state.cartItems, item],
        }
      }
    },

    deleteItem: (state, action) => {
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    },
  },
})

export const { addItem, deleteItem } = cartSlice.actions

export const cartSelector = (state) => state.cart

export default cartSlice.reducer
