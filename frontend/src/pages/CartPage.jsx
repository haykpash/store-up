import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import { addInCart } from '../store/slices/cartSlice'

// , cartSliceSelector

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id

  const quantity = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  //const { cartItems } = useSelector(cartSliceSelector)

  useEffect(() => {
    const peoductAndQuantity = { id: productId, qty: quantity }
    if (productId) {
      dispatch(addInCart(peoductAndQuantity))
    }
  }, [dispatch, productId, quantity])

  const removeFromCartHandler = (id) => {
    console.log('remove')
  }

  const checkOutHandler = (id) => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Shopping cart is empty
            <NavLink to='/'>
              <strong>Go Back</strong>
            </NavLink>
          </Message>
        ) : (
          <ListGroup varitant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.anme} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <NavLink to={`/product/${item.product}`}>
                      {item.name}
                    </NavLink>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addInCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <ListGroup variant='flash'>
          <ListGroup.Item>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkOutHandler}
            >
              Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default CartPage
