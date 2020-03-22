export default class RenderCovid {
  constructor() {

  }

  renderTop(cards, card) {
    cards.forEach((item) => {
      card.createTopItem(item.countryRegion, item.confirmed, item.deaths, item.recovered);
    })
  }

  renderPercent(cards, card) {
    cards.forEach((item) => {
      card.createPercentItem(item.countryRegion, item.confirmed, item.deaths, item.recovered);
    })
  }
}