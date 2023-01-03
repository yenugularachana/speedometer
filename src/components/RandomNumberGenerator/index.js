import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}
    const num = Math.random()
    const count = Math.ceil(num)
  onClicking = () => {
    this.setState({number:this.count})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="bg-container-2">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onClicking}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
