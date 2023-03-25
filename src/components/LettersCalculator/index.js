// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputletters: ''}

  onChangeinputtext = event => {
    this.setState({inputletters: event.target.value})
  }

  render() {
    const {inputletters} = this.state
    // const inputlettersWithoutSPaces = inputletters.replaceAll(' ', '')

    const lettersCount = inputletters.length
    // console.log(inputletters)
    return (
      <div className="container">
        <div className="bg-container">
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="search">Enter the phrase</label>
            <br />
            <input
              type="text"
              id="search"
              placeholder="Enter new phrase"
              onChange={this.onChangeinputtext}
            />
            <br />
            <span className="no-of-letters">No.of letters: {lettersCount}</span>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
