import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productUpdateSlice = createSlice({
  name: 'productUpdate',
  initialState: { product: {} },
  reducers: {
    productUpdateRequest: (state) => {
      state.loading = true
    },
    productUpdateSuccess: (state, action) => {
      state.loading = false
      state.success = true
      state.product = action.payload
    },
    productUpdateFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    productUpdateReset: () => {
      // return { product: {} }
      return {}
    },
  },
})

export const {
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFail,
  productUpdateReset,
} = productUpdateSlice.actions

//--------------Action Creators-----------//

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(productUpdateRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    )

    dispatch(productUpdateSuccess(data))
  } catch (error) {
    dispatch(
      productUpdateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
