import React, { useState } from 'react'
import { useCountUp } from 'react-countup'

function NumberBar(props) {
  const [count, setCount] = useState(100)
  // function postCount(val, test) {
  //   var countUp = setInterval(function() {
  //     console.log(val)
  //     val++
  //     // if (val === 10) {
  //     //   console.log('stop')
  //     //   clearInterval(countUp)
  //     // }
  //   }, 500)
  // }
  const styles = {
    listStyle: 'none'
  }
  const SimpleHook = () => {
    const { countUp } = useCountUp({ end: 100 })
    setCount(countUp)
    console.log(count)
    return <div>{countUp}</div>
  }

  // let testVal = 100
  return (
    <div className="numberbar">
      <SimpleHook />
      {/* <CountUp
        start={0}
        end={count}
        duration={2.75}
        onEnd={() => {
          // setInterval(() => {
          setCount(count + 1)
          // console.log(count)
          // }, 500)
        }}
      /> */}
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
