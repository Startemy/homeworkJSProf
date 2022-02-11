
import ShowCaseView from "../view/ShowCaseView"

export default class ShowcaseController {
  constructor (showcase, eventEmitter){
    this.eventEmitter = eventEmitter
    this.showcase = showcase
    this.container = document.querySelector('.showcase')
    this.cards = []

    this.eventEmitter.subscribe('showcaseFeched', (catalog) => {
      this.cards = catalog.map((product) => new ShowCaseView(product))
      this.cards.forEach((card) => card.render(this.container))
    })
  }

  init(){
    this.showcase.fetch()
    .catch((err) => {
      console.log('Палямалься продукт')
    })
  }

}