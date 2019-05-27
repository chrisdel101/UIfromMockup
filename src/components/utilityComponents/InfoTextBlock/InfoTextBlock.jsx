import React from 'react'
import './index.css'

function InfoTextBlock(props) {
  return (
    <div className="info-text">
      <p>{props.text}</p>
    </div>
  )
}

export default InfoTextBlock
