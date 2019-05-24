import React from 'react'

function NumberBar(props) {
  const styles = {
    listStyle: 'none'
  }
  console.log(props)
  return (
    <div className="numberbar">
      <ul>
        {props.numberBarItems.map((obj, i) => {
          return (
            <li className="numberbar-item" key={i} style={styles}>
              <span className="numerbar-number">{obj.number}</span> {obj.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NumberBar
