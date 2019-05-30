import React from 'react'
import { Image } from 'react-bootstrap'

function renderType(props) {
  if (props.type === 'fluid') {
    return <Image src={props.src} alt={props.alt} fluid />
  } else {
    return <img src={props.src} alt={props.alt} />
  }
}
function MyImage(props) {
  return (
    <div className="image-container" id={props.id ? props.id : ''}>
      {renderType(props)}
    </div>
  )
}

export default MyImage
