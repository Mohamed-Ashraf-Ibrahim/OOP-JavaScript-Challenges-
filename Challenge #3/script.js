// Challenge #3

/* 
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definition of polymorphism �

-Test data:
- Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%*/

// Constructor function for a generic Car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// Constructor function for an Electric Vehicle (EV) that extends Car
const EV = function (make, speed, charge) {
  // Call the Car constructor to set make and speed properties
  Car.call(this, make, speed);
  // Additional property for EV: charge level
  this.charge = charge;
};
// Link the prototypes: Set up prototype chain for inheritance
EV.prototype = Object.create(Car.prototype);
// Method to set the charge level of the EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// Method to simulate acceleration of the EV
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with charge with ${this.charge}`
  );
};
// Creating an instance of EV (Electric Vehicle) with initial values
const car = new EV("Tesla", 120, 23);
// Charging the battery of the EV to 90
car.chargeBattery(90);
// Simulating acceleration of the EV
car.accelerate();
