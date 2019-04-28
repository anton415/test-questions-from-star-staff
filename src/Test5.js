import React, { Component } from 'react'

class ColorInput extends React.Component {
  colorPreview = React.createRef()

  updateColor = event => {
    const color = event.target.value
    this.colorPreview.current.style.setProperty('background-color', color)
  }

  render() {
    return (
      <div className='line-group'>
        <input type='text' onChange={this.updateColor}/>
        <div className='react-box' ref={this.colorPreview}></div>
      </div>
    )
  }
}

class Test5 extends Component {

  render() {
    return (
      <div className="Test5">
        <ColorInput />
      </div>
    )
  }
}

export default Test5
