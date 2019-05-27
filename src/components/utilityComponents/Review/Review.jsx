import React from 'react'
import InfoBlockText from '../InfoTextBlock/InfoTextBlock'
import './index.css'
import Image from '../Image/Image'
import Dash from '../Dash/Dash'

function Review(props) {
  return (
    <div className="review">
      <Image src={props.src} />
      <div className="review-text">
        <InfoBlockText text={`"${props.text}"`} />
        <div className="review-name-conatiner">
          <Dash />
          <span className="review-name"> {props.name}</span>
        </div>
      </div>
    </div>
  )
}
export default Review
