import CartView from "../view/CartView"

export default class CartController{
  constructor (cart, eventEmitter){
    this.eventEmitter = eventEmitter
    this.cart = cart
    this.container = document.querySelector('.cart')
    this.orders = []
    this.btn = []
    this.btnClk = []

    this.eventEmitter.subscribe('cartFeched', (cart) => {
      this.orders = cart.map((product) => new CartView(product))
      this.orders.forEach((order) => order.render(this.container))
    })
  }

  init(){
    this.cart.fetch()
    .catch((err) => {
      console.log('Палямалься корзина')
    })
  }

  selectorBtn(){
    this.btn = document.querySelectorAll('.btn_cart').forEach((button) => {
      button.addEventListener('click', CartView.clickOnBtn);
    })
  }
}