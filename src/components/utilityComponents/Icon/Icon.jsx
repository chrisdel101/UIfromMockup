import React from 'react'

function Icon(props) {
  return (
    <div className={`icon-container-${props.i} icon-container`}>
      <i className={`fa fa-${props.type} icon`} aria-hidden="true" />
    </div>
  )
}
export default Icon
