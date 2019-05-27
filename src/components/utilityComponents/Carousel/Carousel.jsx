import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from '../Image/Image'
import Review from '../Review/Review'
import './index.css'

function renderReviews(props) {
  return props.reviews.map((review, i) => {
    return (
      <Review
        icon={review.icon}
        name={review.name}
        text={review.text}
        key={i}
      />
    )
  })
}

function myCarousel(props) {
  return (
    <Carousel interval={30000}>
      {props.reviews.map((review, i) => {
        return (
          <Carousel.Item key={i}>
            <Review
              src={review.src}
              name={review.name}
              text={review.text}
              key={i}
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default myCarousel
