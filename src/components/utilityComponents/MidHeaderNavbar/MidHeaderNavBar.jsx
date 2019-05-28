import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './index.css'

function renderNavMarkup(props) {
  return (
    <React.Fragment>
      <div className="mid-navbar">
        {props.links.map((link, i) => {
          return (
            <div className="midnav-link-container" key={i}>
              <nav key={i} className="mid-navbar-link">
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
function MidNavBar(props) {
  return <React.Fragment>{renderNavMarkup(props)}</React.Fragment>
}

export default MidNavBar
