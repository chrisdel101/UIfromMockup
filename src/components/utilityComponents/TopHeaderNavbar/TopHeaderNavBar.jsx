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
      navVisible: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    console.log(e)
    // toggle for responsive dropdown
    this.setState(prevState => ({
      navVisible: !prevState.navVisible
    }))
    // console.log(this.state.navVisible)
    // send to parent
    this.props.onClick(e)
  }
  // render depending on type of link
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
  // on hover add underlie
  addUnderline(link) {
    if (!link || !link.text || !this.state.links) return
    if (!this.state.links[link.text]) return
    return true
  }
  componentDidMount() {
    const that = this
    // listen for nav resize
    window.addEventListener('resize', e => {
      if (e.target.innerWidth <= 768) {
        that.setState({ navVisible: false })
      } else {
        that.setState({ navVisible: true })
      }
    })
    const obj = {}
    // create obj for nulls
    this.props.links.map(link => {
      obj[link.text] = null
    })
    // set about to active on mount
    obj['About'] = 'active'
    this.setState({
      links: obj
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
          collapseOnSelect
          expand="md"
          bg="dark"
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
    // console.log(this.state.navVisible)
    // console.log(this.getWidth() < 767)
    return <React.Fragment>{this.renderNavMarkup()}</React.Fragment>
  }
}

export default TopNavBar
