import React from 'react'
import { Nav } from 'react-bootstrap'

function renderNavMarkup(props) {
  return (
    <React.Fragment>
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        {props.links.map((link, i) => {
          return (
            <Nav.Item key={i}>
              <Nav.Link href={`/${link}`}>{link}</Nav.Link>
            </Nav.Item>
          )
        })}
      </Nav>
    </React.Fragment>
  )
}
function NavBar(props) {
  console.log(props.links)
  return <React.Fragment>{renderNavMarkup(props)}</React.Fragment>
}

export default NavBar
