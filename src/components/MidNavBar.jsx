import React from 'react'

function renderNavMarkup(props) {
  return (
    <React.Fragment>
      <div className="mid-navbar">
        {props.links.map((link, i) => {
          return (
            <nav key={i}>
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
