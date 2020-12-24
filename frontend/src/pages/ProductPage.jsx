import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import RatingStars from '../components/RatingStars'
import productData from '../productData'

const ProductPage = ({ match }) => {
  const product = productData.find((item) => item.id === match.params.id)
  console.log(product.image)
  return (
    <>
      <NavLink to='/'>
        <Button className='mb-4' variant='outline-dark'>
          <i className='fas fa-arrow-left px-1'></i> Go Back
        </Button>
      </NavLink>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingStars
                value={product.ratingStars}
                text={`${product.reviewCount} review`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.inStock > 0 ? 'in stock' : 'out of stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  variant='warning'
                  type='butten'
                  disabled={product.inStock === 0}
                >
                  Add to list
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
