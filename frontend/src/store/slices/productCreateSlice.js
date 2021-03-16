import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productCreateSlice = createSlice({
  name: 'productCreate',
  initialState: {},
  reducers: {
    productCreateRequest: (state) => {
      state.loading = true
    },
    productCreateSuccess: (state, action) => {
      state.loading = false
      state.success = true
      state.product = action.payload
    },
    productCreateFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    productCreateReset: () => {
      return {}
    },
  },
})

export const {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  productCreateReset,
} = productCreateSlice.actions

//--------------Action Creators-----------//

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch(productCreateRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/products`, {}, config)

    dispatch(productCreateSuccess(data))
  } catch (error) {
    dispatch(
      productCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
