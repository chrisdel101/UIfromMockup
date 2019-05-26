import React, { Component } from 'react'
import CountUp from 'react-countup'
import { cloneDeep } from 'lodash'

class NumberBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reached: false,
      counterDuration: 2.5,
      numberLine: {
        1: {
          end: 42,
          text: 'web desgin projects'
        },
        2: {
          end: 123,
          text: 'happy clients'
        },
        3: {
          end: 15,
          text: 'award winners'
        },
        4: {
          end: 99,
          text: 'cups of coffee'
        },
        5: {
          end: 24,
          text: 'members'
        }
      }
    }
  }
  renderCountJSMarkUp(obj, i) {
    return (
      <div className="counter count-up" key={i}>
        <CountUp
          end={obj.end}
          duration={this.state.counterDuration}
          onEnd={() => {
            this.setState({ reached: true })
            this.createCustomCounters()
          }}
        />{' '}
        {obj.text}
      </div>
    )
  }
  createCustomCounters() {
    const that = this
    function createTimer(num) {
      // clone obj
      const copy = cloneDeep(that.state.numberLine)
      let currentValue = that.state.numberLine[num].end
      //increment
      currentValue++
      //assign new
      copy[num].end = currentValue
      //setState
      that.setState({
        numberLine: copy
      })
    }
    // set interval
    Object.keys(this.state.numberLine).map((key, i) => {
      return setInterval(createTimer, 1000, key)
    })
  }
  // not used -remove at end
  stopTimer() {
    clearInterval(this.countUp)
  }
  renderCustomMarkUp(obj, i) {
    return (
      <div className="counter custome-counter" key={i}>
        <span>
          {obj.end} {obj.text}
        </span>
      </div>
    )
  }
  renderProperMarkup(obj, i) {
    if (!this.state.reached) {
      return this.renderCountJSMarkUp(obj, i)
    } else if (this.state.reached) {
      return this.renderCustomMarkUp(obj, i)
    }
  }
  renderCount() {
    return Object.values(this.state.numberLine).map((obj, i) =>
      this.renderProperMarkup(obj, i)
    )
  }
  render() {
    return <div>{this.renderCount()}</div>
  }
}
export default NumberBar
