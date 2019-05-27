import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './index.css'

function myButton(props) {
  return (
    <Button variant={props.variant} className={props.className}>
      {props.text}
    </Button>
  )
}
export default myButton
