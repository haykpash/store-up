import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addInCart = createAsyncThunk(
  'cartttt/addInCart',
  async (input, { dispatch, getState }) => {
    const { id, qty } = input
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(
      addItem({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty: qty,
      })
    )

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }
)

const initialState = { cartItems: [] }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.prduct === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    },
  },
})
export const { addItem, deleteItem } = cartSlice.actions

export const cartSliceSelector = (state) => state.cartSlice

export default cartSlice.reducer
