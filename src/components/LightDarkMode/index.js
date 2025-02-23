// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClick: true}
  btnAuth = () => {
    this.setState(preState => ({isClick: !preState.isClick}))
  }

  render() {
    const {isClick} = this.state
    const modeClassName = isClick ? 'dark-mode' : 'light-mode'
    const btnTxt = isClick ? 'Light Mode' : 'Dark Mode'
    const bgCon = isClick ? 'yes' : 'no'

    return (
      <div className="bg-cont">
        <div className={`cont ${modeClassName}`}>
          <h1 className={`heading ${bgCon}`}>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.btnAuth}>
            {btnTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
