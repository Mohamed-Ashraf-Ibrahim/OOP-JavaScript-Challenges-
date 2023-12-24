// Challenge 2

/* 
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

-Test data:
-Data car 1: 'Ford' going at 120 km/h
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    // console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    // console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`${ford.make} is going at ${ford.speed} km/h`);
  }
}

const bmw = new CarCl("BMW", 120);
const mercedes = new CarCl("Mercedes", 95);
const ford = new CarCl("Ford", 50);

bmw.brake();
ford.speedUS = 50;
