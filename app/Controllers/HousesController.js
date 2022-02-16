import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { houseService } from "../Services/HouseService.js";
import { CarsController } from "./CarsController.js";

function _drawHouse() {
  let temp = "";
  ProxyState.houses.forEach((h) => {
    temp += h.Template;
  });
  document.getElementById("listings").innerHTML = temp;
}

export class HousesController {
  constructor() {
    console.log("hello from house controller");
    ProxyState.on("houses", _drawHouse);
  }

  viewHouses() {
    document.getElementById("modal-body-slot").innerHTML = getHouseForm();
    _drawHouse();
  }

  createHouse(event) {
    event.preventDefault();
    let form = event.target;
    console.log("this is my new house", form);

    let newHouse = {
      price: form.price.value,
      sqft: form.sqft.value,
      bedroom: form.bedroom.value,
      bathroom: form.bathroom.value,
      imgUrl: form.imgUrl.value,
    };
    console.log("this is your new house", newHouse);

    houseService.createHouse(newHouse);

    let model = document.getElementById("new-listing");
    bootstrap.Modal.getOrCreateInstance(model).hide();
  }
  deleteHouse(price) {
    houseService.deleteHouse(price);
  }
}
