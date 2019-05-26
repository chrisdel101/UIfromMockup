import React from 'react'
import Icon from '../Icon/Icon'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from './index.css'

function renderLinkType(prop, i) {
  if (prop.type === 'link') {
    return (
      <Nav.Link key={i} href={`/${prop.text}`}>
        {prop.text}
      </Nav.Link>
    )
  } else if (prop.type === 'icon') {
    return (
      <Nav.Link key={i} href={`/${prop.text}`}>
        <Icon type={prop.iconName} />
      </Nav.Link>
    )
  }
}
function renderNavMarkup(props) {
  console.log(props)
  return (
    <React.Fragment>
      <Navbar
        className="top-navbar"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {props.links.map((link, i) => {
              return renderLinkType(link, i)
            })}
          </Nav>
          <Nav />
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
function TopNavBar(props) {
  return <React.Fragment>{renderNavMarkup(props)}</React.Fragment>
}

export default TopNavBar
