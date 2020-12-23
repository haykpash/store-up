import React from 'react'
import { Card } from 'react-bootstrap'
import RatingStars from './RatingStars'

const ProductCard = ({ product }) => {
  return (
    <Card className='my-4 p-1'>
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
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
