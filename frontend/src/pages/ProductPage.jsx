import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import RatingStars from '../components/RatingStars'
import {
  listProductsDetails,
  productDetailsSelector,
} from '../store/slices/detailsSlice'

const ProductPage = ({ match }) => {
  const dispatch = useDispatch()

  //const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = useSelector(productDetailsSelector)

  useEffect(() => {
    debugger
    dispatch(listProductsDetails(match.params.id))
  }, [dispatch, match])
  //console.log(match.params.id)
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
      )}
    </>
  )
}

export default ProductPage
