import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productDeleteSlice = createSlice({
  name: 'productDelete',
  initialState: {},
  reducers: {
    productDeleteRequest: (state) => {
      state.loading = true
    },
    productDeleteSuccess: (state) => {
      state.loading = false
      state.success = true
    },
    productDeleteFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const {
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteFail,
} = productDeleteSlice.actions

//--------------Action Creators-----------//

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(productDeleteRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/products/${id}`, config)

    dispatch(productDeleteSuccess())
  } catch (error) {
    dispatch(
      productDeleteFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
