import React, { Component } from 'react'
import Video from './video/video.mp4'

class Test2 extends Component {
  videoRef = null

  setVideoRef = element => {
    this.videoRef = element
  }

  rewindForward = () => {
    if (this.videoRef) this.videoRef.currentTime += 5
  }

  render() {
    return (
      <div className="Test2">
        <video ref={this.setVideoRef} controls >
          <source src={Video} type="video/mp4" />
        </video>
        <br />
        <button onClick={this.rewindForward}>Rewind forward</button>
      </div>
    )
  }
}

export default Test2
