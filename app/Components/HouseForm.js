// NOTE just a place to keep the ugly form html out of site
export function getHouseForm() {
  return `
  <form class="row  p-2" onsubmit="app.housesController.createHouse(event)">
            <h3 class="col-12">Create a House</h3>
            <div class="mb-3 col-5">
              <label for="" class="form-label">Price</label>
              <input required type="number" class="form-control" name="price" id="price" aria-describedby="helpId"
                placeholder="">
            </div>
            <div class="mb-3 col-5">
              <label for="" class="form-label">SqFt</label>
              <input required type="number" class="form-control" name="sqft" id="sqft" aria-describedby="helpId"
                placeholder="">
            </div>
            <div class="mb-3 col-2">
              <label for="" class="form-label">Bedrooms</label>
              <input required type="number" class="form-control" name="bedroom" id="bedroom" aria-describedby="helpId"
                placeholder="" value="1" min="1" max="12">
            </div>
            <div class="mb-3 col-12">
              <label for="" class="form-label">Bathrooms</label>
              <input required type="number" class="form-control" name="bathroom" id="bathroom" aria-describedby="helpId"
                placeholder="">
            </div>
            <div class="mb-3 col-6">
              <label for="" class="form-label">House Pictures</label>
              <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
                placeholder="imgUrl">
            </div>
            <button class="btn btn-primary">Post</button>
          </form>
  
  `;
}
