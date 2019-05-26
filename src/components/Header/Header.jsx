import React from 'react'
import MidNavBar from '../utilityComponents/MidHeaderNavbar/MidHeaderNavBar.jsx'
import TopNavBar from '../utilityComponents/TopHeaderNavbar/TopHeaderNavBar.jsx'
import Button from '../utilityComponents/Button/Button.jsx'
import Logo from '../utilityComponents/Logo/Logo'
import styles from './index.css'

function Header(props) {
  return (
    <header className="header">
      <Logo text="MoGo" />
      <TopNavBar
        numOfLinks={5}
        instance="top-nav"
        links={['About', 'Service', 'Work', 'Blog', 'Contact']}
      />
      <Button variant="outline-secondary" text="Learn More" />
      <MidNavBar links={['Intro', 'Work', 'About', 'Contacts']} />
    </header>
  )
}

export default Header
