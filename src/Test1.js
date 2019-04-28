import React, { Component } from 'react'

class Test1 extends Component {
  state = {
    value: 10
  }

  decreaseValue = () => {
    this.setState((prevState, props) => {
      return { value: prevState.value - props.step }
    })
  }

  render() {
    return (
      <div className="Test1">
        Value: {this.state.value}
        <div>
          <button onClick={this.decreaseValue}>Decrease value</button>
        </div>
      </div>
    )
  }
}

export default Test1
