import ProductViewModel from './product-view-model'

export default class BasketViewModel {
  Id = 0;
  Cost = 0;
  Src = '';
  Count = 0;

  constructor(viewModel) {
    if (viewModel instanceof ProductViewModel) {
      this.Id = viewModel.Id;
      this.Cost = viewModel.Cost;
      this.Src = viewModel.Src;
      this.Count = 1;
    }
  }

  addProduct() {
    return this.Count++;
  }

  removeProduct() {
    return this.Count--;
  }
}