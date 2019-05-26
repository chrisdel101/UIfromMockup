import React, { Component } from 'react'
import CountUp from 'react-countup'
import { cloneDeep } from 'lodash'

class NumberBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reached: false,
      numberLine: {
        1: {
          end: 42
        },
        2: {
          end: 123
        },
        3: {
          end: 15
        },
        4: {
          end: 99
        },
        5: {
          end: 24
        }
      }
    }
  }
  renderCountJSMarkUp(number, i) {
    return (
      <div className="counter count-up" key={i}>
        <CountUp
          end={number.end}
          duration={2.75}
          onEnd={() => {
            this.setState({ reached: true })
            this.customCounter()
          }}
        />
      </div>
    )
  }
  customCounter(start, id) {
    const that = this
    function timer() {
      const copy = cloneDeep(that.state.numberLine)
      let currentValue = that.state.numberLine['1'].end
      //clone
      //increment
      currentValue++
      //assign
      copy['1'].end = currentValue
      //setState
      that.setState({
        numberLine: copy
      })
      //chaos
      console.log(that.state.numberLine['1'].end)
    }
    let counter = setInterval(timer, 1000)
  }
  stopTimer() {
    clearInterval(this.countUp)
  }
  renderCustomMarkUp(arr, i) {
    this.customCounter()
    return (
      <span className="counter custome-counter" key={i}>
        {arr[1].end}
      </span>
    )
    // })
  }
  renderCount() {
    if (!this.state.reached) {
      return Object.values(this.state.numberLine).map((number, i) => {
        // console.log(number)
        return this.renderCountJSMarkUp(number, i)
      })
    } else if (this.state.reached) {
      return <span>{this.state.numberLine['1'].end}</span>
      // return Object.entries(this.state.numberLine).map((arr, i) => {
      // })
    }
  }
  render() {
    return <div>{this.renderCount()}</div>
  }
}
export default NumberBar
// function NumberBar(props) {
//   const [count, setCount] = useState(100)
//   // function postCount(val, test) {
//   //   var countUp = setInterval(function() {
//   //     console.log(val)
//   //     val++
//   //     // if (val === 10) {
//   //     //   console.log('stop')
//   //     //   clearInterval(countUp)
//   //     // }
//   //   }, 500)
//   // }
//   const styles = {
//     listStyle: 'none'
//   }
//   const SimpleHook = () => {
//     const { countUp } = useCountUp({ end: 100 })
//     setCount(countUp)
//     console.log(count)
//     return <div>{countUp}</div>
//   }

//   // let testVal = 100
//   return (
//     <div className="numberbar">
//       <SimpleHook />
//       {/* <CountUp
//         start={0}
//         end={count}
//         duration={2.75}
//         onEnd={() => {
//           // setInterval(() => {
//           setCount(count + 1)
//           // console.log(count)
//           // }, 500)
//         }}
//       /> */}
//       <ul>
//         {props.numberBarItems.map((obj, i) => {
//           return (
//             <li className="numberbar-item" key={i} style={styles}>
//               <span className="numerbar-number">{obj.number}</span> {obj.text}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }
