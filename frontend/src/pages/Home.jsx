import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import productData from '../productData'

const Home = () => {
  return (
    <>
      <Row>
        {productData.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
