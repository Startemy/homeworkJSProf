export default class ShowCaseView {
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
    return `<div class="picture"><img src='https://picsum.photos/id/${this.data.picture}/250/200'></div>
      <h3>${this.data.title}</h3>
      <button class="btn_cart" data-id="${this.data.id}" type="submit">
          Add to Cart
      </img>
      </button>
      <p>${this.data.price} &#8381;</p>
      `
  }

  getElement() {
    if(this.element) return this.element
    this.element = document.createElement('DIV')
    this.element.classList.add('goods-item')
    this.element.insertAdjacentHTML('afterbegin', this.getHtml())
    return this.element
  }


  update(data) {
    this.data = data;
    this.element.textContent = ''
    this.element.insertAjacentHtml('afterbegin', this.getHtml())
  }
}