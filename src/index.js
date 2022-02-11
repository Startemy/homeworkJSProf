import './scss/style.scss';
import ApiHandler from './controllers/ApiHandler';
import ShowcaseModel from './models/ShowcaseModel';
import EventEmitter from './controllers/EventEmitter';
import CartModel from './models/CartModel';
import ShowcaseController from './controllers/ShowcaseController';
import CartController from './controllers/CartController';

const API_URL = 'http://localhost:3000/api/v1'

const api = new ApiHandler(API_URL)
const eventEmitter = new EventEmitter()
const showcase = new ShowcaseModel(api, eventEmitter)
const cart = new CartModel(api, eventEmitter)
const showcaseController = new ShowcaseController(showcase, eventEmitter)
const cartController = new CartController(cart, eventEmitter)

  showcaseController.init()
  cartController.init()
  setTimeout(() => {
  cartController.selectorBtn()
  },500)
  //Добавить в корзину
// let product = {id: 8, title: "new", price: 999}
// cart.add(product)

//Удалить из корзины
// let id = {id: 8};
// cart.remove(id)
