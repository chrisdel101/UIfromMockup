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
        console.log(review)
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

// function myCarousel(props) {
//   return (
//     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide"/>>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide"/
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>ƒ
//   )
// }

// export default myCarousel
