export default class ProductViewModel {
  Id = 0;
  Cost = 0;
  Src = '';

  constructor(id, cost, src) {
    this.Id = id;
    this.Cost = cost;
    this.Src = src;
  }
}