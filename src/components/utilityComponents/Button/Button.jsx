import React from 'react'
import { Button } from 'react-bootstrap'

function myButton(props) {
  return <Button variant={props.variant}>{props.text}</Button>
}
export default myButton
