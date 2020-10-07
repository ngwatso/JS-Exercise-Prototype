/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (someFood) {
  this.stomach.push(someFood);

  if (this.stomach.length > 10) {
    this.stomach.pop();
  }
  return this.stomach;
};

Person.prototype.poop = function () {
  for (let i = 0; i < 10; i++) {
    this.stomach.shift();
  }
  return console.log(this.stomach.length);
};

Person.prototype.toString = function personToString() {
  return `${this.name}, ${this.age}`;
};

const Nick = new Person("Nick", 41);
console.log(Nick);

Nick.eat("hotdog");
Nick.eat("hamburger");
Nick.eat("corn");
Nick.poop();
Nick.toString();

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  this.gasoline = [0];
  this.trip = [];
}

Car.prototype.fill = function (fuel) {
  for (let i = 0; i < fuel; i++) {
    this.gasoline.push(1);
  }
  const fillTank = this.gasoline.reduce((total, item) => {
    return total + item;
  }, 0);
  return (this.tank = 0 + fillTank);
};

Car.prototype.drive = function (miles) {
  for (let i = 0; i < miles; i++) {
    this.trip.push(1);
  }
  if (this.trip.length >= this.fill() * this.milesPerGallon) {
    return [
      (this.odometer = this.fill() * this.milesPerGallon),
      (this.tank = 0),
      `I ran out of fuel at ${this.odometer} miles!`,
    ];
  } else {
    console.log(this.trip.length);
    return console.log(
      (this.odometer = 0 + this.trip.length),
      (this.tank = this.fill() - miles / this.milesPerGallon)
    );
  }
};

const comaro = new Car("Comaro", 20);
// console.log(comaro);

comaro.fill(10);
comaro.drive(201);

console.log(comaro);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, toy) {
  Person.call(this, name, age);
  this.favoriteToy = toy;
}

Baby.prototype = Object.create(Person.prototype);

const aiden = new Baby("Aiden", 2, "pumice");
console.log(aiden);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}.`;
};

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global - "this" defines the entire window (everything on the page)
  2. Implicit - "this" defines an object (to the left of the dot)
  3. New - "this" defines objects created by a constructor function
  4. Explicit - "this" defines a specific object (the one to the right in parenthesis)
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
