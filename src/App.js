import React, { Component } from 'react'
import Test1 from './Test1'
import Test2 from './Test2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test1  step='1'/>
        <hr />
        <Test2 />
        <hr />

      </div>
    );
  }

}

export default App;
