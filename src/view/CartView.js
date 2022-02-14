export default class CartView {
  constructor(data) {
    this.data = data
    this.element = null
    this.product = []
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

  static clickOnBtn(event){
    /**Меняем текст на добавленно */
    this.btnClk = event
    if (!this.btnClk.target.hasAttribute('data-count')) {
      this.btnClk.target.innerHTML = 'Added';
      setTimeout(() => {
        this.btnClk.target.innerHTML = 'Delete from cart';
      }, 2000);
      // /**Добавить колиxество в data-count - надо подумать? Думаю лучше менять количество в корзине */
      let i = 1;
      this.btnClk.target.setAttribute('data-count', `${i}`);
      let quantyti = Number(this.btnClk.target.getAttribute('data-count'))
      /**@param prodId получаем id из кнопки*/
    } else {
      /**Повторное нажатие на кнопку Add to cart - удаляет из массива order и менят надпись */
      this.btnClk.target.innerHTML = 'Add to Cart';
      let id = this.btnClk.target.dataset.id;
      this.btnClk.target.removeAttribute('data-count');
    }
  }

}