import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../store/slices/productTopRatedSlice'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const { loading, error, products } = useSelector(
    (state) => state.productTopRated
  )

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <NavLink to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
