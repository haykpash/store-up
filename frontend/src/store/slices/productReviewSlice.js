import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productReviewCreateSlice = createSlice({
  name: 'productCreateReview',
  initialState: {},
  reducers: {
    productCreateReviewRequest: (state) => {
      state.loading = true
    },
    productCreateReviewSuccess: (state, action) => {
      state.loading = false
      state.success = true
    },
    productCreateReviewFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    productCreateReviewReset: () => {
      return {}
    },
  },
})

export const {
  productCreateReviewRequest,
  productCreateReviewSuccess,
  productCreateReviewFail,
  productCreateReviewReset,
} = productReviewCreateSlice.actions

//--------------Action Creators-----------//

export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(productCreateReviewRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config)

    dispatch(productCreateReviewSuccess())
  } catch (error) {
    dispatch(
      productCreateReviewFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
