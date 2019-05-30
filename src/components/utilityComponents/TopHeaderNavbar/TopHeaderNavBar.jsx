import React from 'react'
import Icon from '../Icon/Icon'
import { Nav, Navbar } from 'react-bootstrap'
import './index.css'
import { cloneDeep, mapValues } from 'lodash'

// function addUnderlineOnMount(e) {}
class TopNavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navVisible: null,
      links: {
        About: 'active',
        Service: null,
        Work: null,
        Blog: null,
        Contact: null
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    // toggle for responsive dropdown
    this.setState(prevState => ({
      navVisible: !prevState.navVisible
    }))
  }
  // render depending on type of link - link or icon
  renderLinkType(link, i) {
    if (link.type === 'link') {
      return (
        <Nav.Link
          className={`${this.addUnderline(link) ? 'topnav-active' : ''}`}
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
          className={`${this.addUnderline(link) ? 'active' : ''}`}
          key={i}
          href={`/${link.text}`}
          onMouseOver={e => this.moveUnderLine(e)}
        >
          <Icon type={link.iconName} />
        </Nav.Link>
      )
    }
  }
  // on hover add underline and change color
  addUnderline(link) {
    if (!link || !link.text || !this.state.links) return
    if (!this.state.links[link.text]) return
    return true
  }
  handleSize(num) {
    if (window.innerWidth <= num) {
      return false
    } else {
      return true
    }
  }
  componentDidMount() {
    this.setState({
      navVisible: this.handleSize(769)
    })
    const that = this
    // listen for nav resize
    window.addEventListener('resize', e => {
      that.setState({ navVisible: that.handleSize(768) })
    })
  }
  // move underline on hover
  moveUnderLine(e) {
    let copy = cloneDeep(this.state.links)
    copy = mapValues(copy, () => false)
    copy[e.target.innerHTML] = 'active'
    this.setState({
      links: copy
    })
  }
  renderNavMarkup() {
    return (
      <React.Fragment>
        <Navbar
          className={`top-navbar`}
          expand="md"
          variant="dark"
          expanded="true"
          onToggle={this.handleClick}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className={`mr-auto ${
                !this.state.navVisible ? 'nav-invisible' : ''
              }`}
            >
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
