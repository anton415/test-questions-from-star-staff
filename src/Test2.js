import React, { Component } from 'react'
import Video from './video/video.mp4'

class Test2 extends Component {
  videoRef = React.createRef()

  rewindForward = () => {
    const videoElement = this.videoRef.current
    if (!videoElement) {
      return;
    }
    videoElement.currentTime += 5
  }

  render() {
    return (
      <div className="Test2">
        <video ref={this.videoRef} controls >
          <source src={Video} type="video/mp4" />
        </video>
        <br />
        <button onClick={this.rewindForward}>Rewind forward</button>
      </div>
    )
  }
}

export default Test2
