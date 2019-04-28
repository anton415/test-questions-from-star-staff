import React, { Component } from 'react'

class Vehicle {
  position = { x:0,y:0}
  flySpeed = 0
  moveSpeed = 0

  fly() {
    this.position.y +=this.flySpeed
  }

  move() {
    this.position.x += this.moveSpeed
  }
}

class Helicopter extends Vehicle {
  moveSpeed = 300
  flySpeed = 60
}

class Plane extends Vehicle {
  moveSpeed = 200
  verticalFlySpeed = 100
  horisontalFlySpeed = 800

  fly() {
    this.position.y += this.verticalFlySpeed
    this.position.x += this.horisontalFlySpeed
  }
}

class Car extends Vehicle {
  moveSpeed = 60
  fly() {/*cars couldn't fly*/}
}

class Rocket extends Vehicle {
  flySpeed = 1000
  move() {/*rockets move only vertically*/}
}

class Test3 extends Component {

  render() {
    return (
      <div className="Test3">
      </div>
    )
  }
}

export default Test3
