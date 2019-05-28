import React from 'react'
import Icon from '../Icon/Icon'
import { Nav, Navbar } from 'react-bootstrap'
import './index.css'
import { cloneDeep, mapValues } from 'lodash'

// function addUnderlineOnMount(e) {}
class TopNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
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
  addUnderline(link) {
    if (!link || !link.text || !this.state.links) return
    if (!this.state.links[link.text]) return
    return true
  }
  componentDidMount() {
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
