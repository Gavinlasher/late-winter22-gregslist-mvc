export class House {
  constructor({ price, sqft, bedroom, bathroom, imgUrl }) {
    this.sqft = sqft;
    this.price = price;
    this.bedroom = bedroom;
    this.bathroom = bathroom;
    this.imgUrl = imgUrl;
  }

  get Template() {
    return `
    <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="House img">
          <div class="p-3">
            <p>${this.price}</p>
            <p>${this.sqft}</p>
            <p>${this.bedroom}</p>
            <p>${this.bathroom}</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse(${this.price})"> delete </button>
        </div>
      </div>
    `;
  }
}
