import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from '../Image/Image'
import Review from '../Review/Review'
import './index.css'

function renderReviews(props) {
  return props.reviews.map((review, i) => {
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
  })
}
function renderWorks(props) {
  return props.works.map((review, i) => {
    return (
      <Carousel.Item key={i}>
        <Image src={review.src} />
      </Carousel.Item>
    )
  })
}

function myCarousel(props) {
  if (!props.instance) return
  return (
    <Carousel interval={30000} className="work">
      {props.instance === 'reviews' ? renderReviews(props) : renderWorks(props)}
    </Carousel>
  )
}

export default myCarousel
