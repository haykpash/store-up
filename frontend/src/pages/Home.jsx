import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Home = () => {
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/products')

      setProductsData(res.data)
    }
    fetchData()
  }, [])
  return (
    <>
      <Row>
        {productsData.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
