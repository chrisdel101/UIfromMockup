import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from './Image'

function Header(props) {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <header className="header">
            <Image type="fluid" src="http://place-puppy.com/500x500" />
          </header>
        </Col>
      </Row>
      <Row />
    </Container>
  )
}

export default Header
