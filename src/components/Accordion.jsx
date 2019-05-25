import React from 'react'
import Icon from './Icon'
import { Accordion, Card } from 'react-bootstrap'

function myAccordion(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <span className="accordion-icon">
            <Icon type={props.drawers['1'].icon} />
          </span>
          {props.drawers['1'].heading}
          <span className="accordion-arrow">
            <Icon type={props.drawers['1'].arrows[0]} />
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.drawers['1'].text}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <span className="accordion-icon">
            <Icon type={props.drawers['2'].icon} />
          </span>
          {props.drawers['2'].heading}
          <span className="accordion-arrow">
            <Icon type={props.drawers['1'].arrows[0]} />
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>{props.drawers['2'].text}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <span className="accordion-icon">
            <Icon type={props.drawers['3'].icon} />
          </span>
          {props.drawers['3'].heading}
          <span className="accordion-arrow">
            <Icon type={props.drawers['1'].arrows[0]} />
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>{props.drawers['3'].text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default myAccordion
