import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Icon/Icon'
import { Nav, Navbar } from 'react-bootstrap'
import './index.css'

function renderLinkType(prop, i, inputEl) {
  // console.log(inputEl)
  if (prop.type === 'link') {
    return (
      <Nav.Link
        ref={inputEl}
        key={i}
        href={`/${prop.text}`}
        onMouseOver={e => moveUnderLine(e, inputEl)}
      >
        {prop.text}
      </Nav.Link>
    )
  } else if (prop.type === 'icon') {
    return (
      <Nav.Link
        ref={inputEl}
        key={i}
        href={`/${prop.text}`}
        onMouseOver={e => moveUnderLine(e, inputEl)}
      >
        <Icon type={prop.iconName} />
      </Nav.Link>
    )
  }
}
function moveUnderLine(e, inputEl) {
  console.log(e, inputEl.current)
}
function renderNavMarkup(props, inputEl) {
  console.log(inputEl)
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
              return renderLinkType(link, i, inputEl)
            })}
          </Nav>
          <Nav />
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
// function addUnderlineOnMount(e) {}
function TopNavBar(props) {
  // const firstLink
  // let [firstLink, setLink] = useState(null)
  // useEffect(() => {
  //   firstLink = document.querySelectorAll('.nav-link')[0]
  // })
  const [nodes, setNodes] = useState(0)

  useEffect(() => {
    function handleGetNodes(nodes) {
      setNodes(nodes)
    }
  })
  const inputEl = useRef(null)
  return <React.Fragment>{renderNavMarkup(props, inputEl)}</React.Fragment>
}

export default TopNavBar
