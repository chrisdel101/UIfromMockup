import React from 'react'
import MidNavBar from '../utilityComponents/MidHeaderNavbar/MidHeaderNavBar.jsx'
import TopNavBar from '../utilityComponents/TopHeaderNavbar/TopHeaderNavBar.jsx'
import Button from '../utilityComponents/Button/Button.jsx'
import Logo from '../utilityComponents/Logo/Logo'
import './index.css'
import HeaderTextBlock from '../utilityComponents/HeaderTextBlock/HeaderTextBlock'
import Dash from '../utilityComponents/Dash/Dash'

function Header(props) {
  const { header } = props.headerBlocks
  return (
    <header className="header">
      <Logo text="MoGo" />
      <TopNavBar numOfLinks={5} instance="top-nav" links={props.topNavlinks} />
      <HeaderTextBlock cursive={header.cursive} block={header.block} />
      <Dash />
      <Button
        variant="outline-secondary"
        text="Learn More"
        className="header-btn"
      />
      <MidNavBar links={props.midNavLinks} />
    </header>
  )
}

export default Header
