// Challenge #4

/*
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!

-Test data:
- Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% */

// CarCl class represents a basic car with make and speed properties.
class CarCl {
  // Constructor initializes the make and speed properties.
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}
// EVCL class extends CarCl and adds a charge property for an electric vehicle.
class EVCL extends CarCl {
  // Private #charge property represents the battery charge level.
  #charge;
  // Constructor initializes make, speed, and charge properties.
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // chargeBattery method sets the battery charge to the specified value.
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this; // Enable method chaining.
  }
  // accelerate method increases the speed, decreases the charge, and logs the status.
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with charge with ${
        this.#charge
      }`
    );
    return this; // Enable method chaining.
  }
  // brake method decreases the speed.
  brake() {
    this.speed -= 5;
    return this; // Enable method chaining.
  }
}
// Create an instance of EVCL with initial values.
const car = new EVCL("Rivian", 120, 23);
// Example of method chaining: accelerate twice, brake, charge the battery, and accelerate again.
car.accelerate().accelerate().brake().chargeBattery(50).accelerate();
