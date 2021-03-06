import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import RatingStars from './RatingStars'

const ProductCard = ({ product }) => {
  return (
    <Card
      bg='light'
      className='my-4 p-1'
      style={{
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      }}
    >
      <NavLink to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </NavLink>
      <Card.Body>
        <NavLink className='links' to={`/product/${product._id}`}>
          <Card.Title as='h5'>
            <strong>{product.name}</strong>
          </Card.Title>
        </NavLink>
        <Card.Text as='div'>
          <RatingStars
            value={product.ratingStars}
            text={`${product.reviewCount} review`}
          />
        </Card.Text>
        <Card.Text as='h4'>$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
