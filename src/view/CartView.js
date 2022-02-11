export default class CartView {
  constructor(data) {
    this.data = data
    this.element = null
  }

  render(container) {
    container.append(this.getElement())
  }

  getId() {
    return this.data.id
  }

  getHtml() {
    return `
        <li class='dispnone'>${this.data.id}</li>
        <li>${this.data.title}</li>
        <li>$${this.data.price}</li>
        <li class='total_price'>$${this.data.price}</li>
    `
  }

  getElement() {
    if(this.element) return this.element
    this.element = document.createElement('UL')
    this.element.classList.add('cart_ul')
    this.element.insertAdjacentHTML('afterbegin', this.getHtml())
    return this.element
  }


  update(data) {
    this.data = data;
    this.element.textContent = ''
    this.element.insertAjacentHtml('afterbegin', this.getHtml())
  }


}