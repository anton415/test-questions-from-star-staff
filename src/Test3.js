import React, { Component } from 'react'

class Vehicle {
  constructor(position={x:0,y:0}, flySpeed=0, moveSpeed=0) {
    this.position = position
    this.flySpeed = flySpeed
    this.moveSpeed = moveSpeed
  }

  fly() {
    this.position.y += this.flySpeed
  }

  move() {
    this.position.x += this.moveSpeed
  }
}

class Helicopter extends Vehicle {
  constructor(moveSpeed=300, flySpeed=60) {
    super()
    this.moveSpeed = moveSpeed
    this.flySpeed = flySpeed
  }
}

class Plane extends Vehicle {
  constructor(moveSpeed = 200, verticalFlySpeed = 100, horisontalFlySpeed = 800) {
    super()
    this.moveSpeed = moveSpeed
    this.verticalFlySpeed = verticalFlySpeed
    this.horisontalFlySpeed = horisontalFlySpeed
  }

  fly() {
    this.position.y += this.verticalFlySpeed
    this.position.x += this.horisontalFlySpeed
  }
}

class Car extends Vehicle {
  constructor(moveSpeed = 60) {
    super(moveSpeed)
    this.moveSpeed = moveSpeed
  }

  fly() {/*cars couldn't fly*/}
}

class Rocket extends Vehicle {
  constructor(flySpeed = 1000) {
    this.flySpeed = flySpeed
  }

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
