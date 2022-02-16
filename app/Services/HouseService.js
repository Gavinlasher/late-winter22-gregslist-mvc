import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HouseService {
  createHouse(newHouse) {
    console.log("this is a new house", newHouse);

    let realHouse = new House(newHouse);

    ProxyState.houses = [realHouse, ...ProxyState.houses];
  }
  deleteHouse(price) {
    let indexToDelete = ProxyState.houses.findIndex((h) => h.price == price);

    ProxyState.houses.splice(indexToDelete, 1);

    ProxyState.houses = ProxyState.houses;

    console.log("hello from delete house");
  }
}

export const houseService = new HouseService();
