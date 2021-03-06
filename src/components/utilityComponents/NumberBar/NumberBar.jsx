import React, { Component } from 'react'
import CountUp from 'react-countup'
import { cloneDeep } from 'lodash'
import './index.css'

class NumberBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reached: false
    }
  }
  componentDidMount() {
    // add props to state
    this.setState({
      numberLine: this.props.numberLine,
      counterDuration: this.props.counterDuration
    })
  }
  renderCountJSMarkUp(obj, i) {
    return (
      <div className="counter count-up" key={i}>
        <CountUp
          className="numberbar-number"
          end={obj.end}
          duration={this.state.counterDuration}
          onEnd={() => {
            this.setState({ reached: true })
            this.createCustomCounters()
          }}
        />{' '}
        <br />
        <span className="numberbar-text">{obj.text}</span>
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
  renderCustomMarkUp(obj, i) {
    return (
      <div className="counter custome-counter" key={i}>
        <span className="numberbar-number">{obj.end}</span>
        <br />
        <span className="numberbar-text">{obj.text}</span>
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
    if (!this.state || !this.state.numberLine) return
    return Object.values(this.state.numberLine).map((obj, i) =>
      this.renderProperMarkup(obj, i)
    )
  }
  render() {
    return <div className="number-bar">{this.renderCount()}</div>
  }
}
export default NumberBar
