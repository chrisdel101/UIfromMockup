import React, { useState } from 'react'
import './index.css'
import { cloneDeep, mapValues } from 'lodash'

function MidNavBar(props) {
  const [hovering, setHover] = useState({
    '0': null,
    '1': null,
    '2': null,
    '3': null
  })
  // on hover add class for color
  function handleMousOver(e, i) {
    let copy = cloneDeep(hovering)
    copy = mapValues(copy, () => null)
    copy[i.toString()] = 'midnav-active'
    setHover(copy)
  }
  // on hover leave remove all classes
  function handleMouseLeave(e) {
    let copy = cloneDeep(hovering)
    copy = mapValues(copy, () => null)
    setHover(copy)
  }
  function renderNavMarkup(props) {
    return (
      <React.Fragment>
        <div className="mid-navbar">
          {props.links.map((link, i) => {
            return (
              <div
                className={`midnav-link-container ${
                  hovering[i.toString()] ? 'midnav-active' : ''
                }`}
                key={i}
              >
                <nav
                  key={i}
                  className="mid-navbar-link"
                  onMouseOver={e => handleMousOver(e, i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={`/${link}`}>
                    <span className="mid-nav-number">0{i + 1}</span> {link}
                  </a>
                </nav>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }

  return <React.Fragment>{renderNavMarkup(props)}</React.Fragment>
}

export default MidNavBar
