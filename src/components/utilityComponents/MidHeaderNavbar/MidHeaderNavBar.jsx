import React from 'react'
import './index.css'

function renderNavMarkup(props) {
  return (
    <React.Fragment>
      <div className="mid-navbar">
        {props.links.map((link, i) => {
          return (
            <nav key={i} className="mid-navbar-link">
              <div className="midnav-status-line" />
              <a href={`/${link}`}>{link}</a>
            </nav>
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
