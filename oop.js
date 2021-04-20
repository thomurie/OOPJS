"use strict";

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  numWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  numWheels() {
    return 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (vehicle instanceof Vehicle && this.vehicles.length < this.capacity) {
      this.vehicles.push(vehicle);
      return "Vehicle added";
    } else if (!(vehicle instanceof Vehicle)) {
      return "Only Vehichles allowed in the garage!";
    } else if (this.vehicles.length >= this.capacity) {
      return "Garage is full mate";
    }
  }
}
