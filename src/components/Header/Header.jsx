import React from 'react'
import MidNavBar from '../utilityComponents/MidHeaderNavbar/MidHeaderNavBar.jsx'
import TopNavBar from '../utilityComponents/TopHeaderNavbar/TopHeaderNavBar.jsx'
import Button from '../utilityComponents/Button/Button.jsx'
import Logo from '../utilityComponents/Logo/Logo'
import './index.css'
import HeaderTextBlock from '../utilityComponents/HeaderTextBlock/HeaderTextBlock'
import Dash from '../utilityComponents/Dash/Dash'

const links = [
  {
    type: 'link',
    text: 'About'
  },
  {
    type: 'link',
    text: 'Service'
  },
  {
    type: 'link',
    text: 'Work'
  },
  {
    type: 'link',
    text: 'Blog'
  },
  {
    type: 'link',
    text: 'Contact'
  },
  {
    type: 'icon',
    iconName: 'shopping-cart'
  },
  {
    type: 'icon',
    iconName: 'search'
  }
]
function Header(props) {
  console.log(props.headerBlocks)
  const { header } = props.headerBlocks
  return (
    <header className="header">
      <Logo text="MoGo" />
      <TopNavBar numOfLinks={5} instance="top-nav" links={links} />
      <HeaderTextBlock cursive={header.cursive} block={header.block} />
      <Dash />
      <Button
        variant="outline-secondary"
        text="Learn More"
        className="header-btn"
      />
      <MidNavBar links={['Intro', 'Work', 'About', 'Contacts']} />
    </header>
  )
}

export default Header
