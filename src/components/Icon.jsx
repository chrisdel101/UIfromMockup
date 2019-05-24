import React from 'react'

function Icon(props) {
  // pass event to parent
  function handleClick(e) {
    props.onClick(e)
  }
  return (
    <div
      className={`icon-container-${props.i} icon-container`}
      onClick={handleClick}
    >
      <i className={`fa fa-${props.type} icon`} aria-hidden="true" />
    </div>
  )
}
export default Icon
