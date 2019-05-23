import React from 'react'
import NavBar from './Navbar.jsx'
import Button from './Button.jsx'

import backgroundImage from '../images/background-pink.png'

function Header(props) {
  const styles = {
    margin: '0',
    padding: '0',
    width: '100%',
    height: '400px',
    backgroundImage: `url(${backgroundImage})`
  }

  return (
    <header style={styles}>
      <NavBar
        numOfLinks={5}
        instance="top-nav"
        links={['About', 'Service', 'Work', 'Blog', 'Contact']}
      />
      <Button variant="outline-secondary" text="Learn More" />
    </header>
  )
}

export default Header
