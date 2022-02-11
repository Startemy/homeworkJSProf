export default class ApiHandler {

  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  //Получение списка продуктов из каталога
  getCatalog() {
    /**@param fetch - GET запрос на сервер  */
    return fetch(`${this.apiUrl}/catalog`)
      .then((response) => {
        return response.json()
      })
  }

  //Получение списка корзины
  getCart() {
    return fetch(`${this.apiUrl}/cart`)
      .then((response) => {
        return response.json()
      })
  }

  addToCart(data) {
    fetch(`${this.apiUrl}/cart`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
  }

  removeFromCart(data) {
    fetch(`${this.apiUrl}/cart`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
  }
}