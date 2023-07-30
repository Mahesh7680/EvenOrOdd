import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count Is {count}</h1>
          {count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
          <button type="button" onClick={this.onIncreament}>
            Increment
          </button>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
