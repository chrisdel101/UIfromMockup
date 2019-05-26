import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from './index.css'

function renderNavMarkup(props) {
  return (
    <React.Fragment>
      <Nav
        className="top-navbar"
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
function TopNavBar(props) {
  return <React.Fragment>{renderNavMarkup(props)}</React.Fragment>
}

export default TopNavBar
