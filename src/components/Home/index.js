// Write your code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isClicked: false}

  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return !isClicked ? 'Login' : 'Logout'
  }

  getHeadingText = () => {
    const {isClicked} = this.state
    return !isClicked ? 'Please Login' : 'Welcome User'
  }

  getButtonClass = () => {
    const {isClicked} = this.state
    return isClicked ? 'btn-2' : 'btn-1'
  }

  render() {
    const buttonText = this.getButtonText()
    const headingText = this.getHeadingText()
    const classText = this.getButtonClass()
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">{headingText}</h1>
          <button type="button" className={classText} onClick={this.onClicked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
