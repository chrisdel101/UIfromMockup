import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Icon/Icon'
import { Nav, Navbar } from 'react-bootstrap'
import './index.css'

// function addUnderlineOnMount(e) {}
class TopNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  renderLinkType(link, i) {
    // console.log(inputEl)
    if (link.type === 'link') {
      return (
        <Nav.Link
          key={i}
          href={`/${link.text}`}
          onMouseOver={e => this.moveUnderLine(e)}
        >
          {link.text}
        </Nav.Link>
      )
    } else if (link.type === 'icon') {
      return (
        <Nav.Link
          key={i}
          href={`/${link.text}`}
          onMouseOver={e => this.moveUnderLine(e)}
        >
          <Icon type={link.iconName} />
        </Nav.Link>
      )
    }
  }
  moveUnderLine(e, inputEl) {
    console.log(e, inputEl.current)
  }
  renderNavMarkup() {
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
              {this.props.links.map((link, i) => {
                return this.renderLinkType(link, i)
              })}
            </Nav>
            <Nav />
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }

  render() {
    return <React.Fragment>{this.renderNavMarkup()}</React.Fragment>
  }
}

export default TopNavBar
