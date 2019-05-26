import React from 'react'
import InfoBlockText from '../InfoTextBlock/InfoTextBlock'
import Icon from '../Icon/Icon'

function Review(props) {
  return (
    <div className="review">
      hello
      <Icon type={props.icon} />
      <InfoBlockText text={props.text} />
      {props.name}
    </div>
  )
}
export default Review