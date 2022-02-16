import { Car } from "./Models/Car.js";
import { House } from "./Models/House.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

const testCar = new Car({
  make: "GMC",
  model: "Sierra",
  year: 2018,
  price: 5600,
  description: "its cool.",
  color: "#FFFFFF",
  imgUrl: "https://thiscatdoesnotexist.com",
});

const testHouse = new House({
  price: 120000,
  sqft: 1200,
  bedroom: 3,
  bathroom: 2,
  imgUrl:
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
});

class AppState extends EventEmitter {
  houses = [testHouse];

  // NOTE just adds intellisense to our cars array that lets our code know its an array of cars, not other things
  /** @type {import('./Models/Car').Car[]} */
  cars = [testCar];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
