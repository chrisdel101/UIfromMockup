import React from 'react'

function BlockTextHeader(props) {
  return (
    <div className="block-text-header">
      <div className="cursive-text">{props.cursive}</div>
      <div className="block-text">{props.block}</div>
    </div>
  )
}

export default BlockTextHeader
