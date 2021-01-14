import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import RatingStars from '../components/RatingStars'
import {
  listProductsDetails,
  productDetailsSelector,
} from '../store/slices/detailsSlice'

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const { loading, error, product } = useSelector(productDetailsSelector)

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id))
  }, [dispatch, match])

  const addInCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <>
      <NavLink to='/'>
        <Button className='mb-4' variant='outline-dark'>
          <i className='fas fa-arrow-left px-1'></i> Go Back
        </Button>
      </NavLink>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={7} lg={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={5} lg={4}>
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
              <ListGroup.Item>
                <span className='mr-3'>Price:</span>$ {product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} lg={3} className='mt-5'>
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
                    <Col>
                      {product.inStock > 0 ? 'in stock' : 'out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addInCartHandler}
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
      )}
    </>
  )
}

export default ProductPage
