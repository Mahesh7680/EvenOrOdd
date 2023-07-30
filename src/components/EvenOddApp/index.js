import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncreament = () => {
    const {count} = this.state
    if (count < 100) {
      this.setState(prevState => ({
        count: prevState.count + Math.round(Math.random(0, 1) * 100),
      }))
    } else this.setState(prevState => ({count: 0}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count {count}</h1>
          {count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
          <button type="button" onClick={this.onIncreament}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
