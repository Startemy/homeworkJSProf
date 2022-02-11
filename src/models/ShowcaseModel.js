import ProductList from "../controllers/ProductList";

export default class ShowcaseModel extends ProductList {
  constructor(apiHendler, eventEmitter) {
    super([])
    this.api = apiHendler
    this.eventEmitter = eventEmitter
  }

  //Получение списка продуктов из каталога через ApiHendler
  fetch() {
    return this.api.getCatalog()
    /**@param {then(list)} - Запись перечня в ProductList*/
    .then((list) => {
      this.list = list
      return list
    })
    .then((list) => {
      this.eventEmitter.emit('showcaseFeched', list)
      return list
    })
  }

}