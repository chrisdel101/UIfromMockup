import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from '../Image/Image'
import Review from '../Review/Review'

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
  const style = {
    height: '200px',
    backgroundColor: '#d8d8d8'
  }
  return (
    <Carousel style={style} interval={30000}>
      {props.reviews.map((review, i) => {
        return (
          <Carousel.Item key={i}>
            <img src="http://place-puppy.com/100x100" />
            <Carousel.Caption>
              <Review
                icon={review.icon}
                name={review.name}
                text={review.text}
                key={i}
              />
            </Carousel.Caption>
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
