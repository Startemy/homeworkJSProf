import ProductList from "../controllers/ProductList";

export default class CartModel extends ProductList {
  constructor(apiHendler, eventEmitter) {
    super([])
    this.api = apiHendler
    this.eventEmitter = eventEmitter
  }

  //Получение списка корзины через ApiHentler
  fetch() {
    return this.api.getCart()
    .then((list) => {
      this.list = list
      return list
    })
    .then((list) => {
      this.eventEmitter.emit('cartFeched', list)
      return list
    })
  }

  add(data) {
    this.api.addToCart(data)
  }

  remove(id) {
    this.api.removeFromCart(id)
  }




}