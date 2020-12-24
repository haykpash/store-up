import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import RatingStars from './RatingStars'

const ProductCard = ({ product }) => {
  return (
    <Card className='my-4 p-1'>
      <NavLink to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' />
      </NavLink>
      <Card.Body>
        <NavLink to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </NavLink>
        <Card.Text as='div'>
          <RatingStars
            value={product.ratingStars}
            text={`${product.reviewCount} review`}
          />
        </Card.Text>
        <Card.Text as='h4'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
