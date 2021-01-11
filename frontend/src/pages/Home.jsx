import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listProducts, productListSelector } from '../store/slices/productSlice'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const dispatch = useDispatch()

  const { loading, error, products } = useSelector(productListSelector)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>New Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Home
