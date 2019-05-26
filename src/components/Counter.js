import React from 'react'
import CountUp from 'react-countup'

function CounterMarkup(props) {
  function renderCountJS() {
    return (
      <div className="counter count-up">
        <CountUp
          end={props.number.end}
          duration={2.75}
          onEnd={() => {
            props.on('hwllo')
          }}
        />
      </div>
    )
  }
  function renderManual() {}
  return renderCountJS()
}
export default CounterMarkup
