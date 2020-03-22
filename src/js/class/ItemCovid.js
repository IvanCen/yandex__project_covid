export default class ItemCovid {
  constructor(container) {
    this.container = container;
  }

  createTopItem(countryRegion, confirmed, deaths, recovered) {
    this.container.insertAdjacentHTML('beforeend', `
          <tr class="table__row">
          <td class="table__data">${countryRegion}</td>
          <td class="table__data">${confirmed}</td>
          <td class="table__data">${deaths}</td>
          <td class="table__data">${recovered}</td>
        </tr>`)
  }

  createPercentItem(countryRegion, confirmed, deaths, recovered) {
    const oneDecimalPlace = 1;
    const oneHundredPercent = 100;
    const deathsPercent = (deaths / confirmed * oneHundredPercent).toFixed(oneDecimalPlace);
    const recoveredPercent = (recovered / confirmed * oneHundredPercent).toFixed(oneDecimalPlace);

    this.container.insertAdjacentHTML('beforeend', `
          <div class="diagram__row">
          <div class="diagram__caption">
            <p class="diagram__country">${countryRegion}</p>
            <p class="diagram__analytics">
              Смертность
              <span class="diagram__data diagram__data_type_dead">${deathsPercent}%</span> •
              Вылечилось
              <span class="diagram__data diagram__data_type_healed">${recoveredPercent}%</span>
            </p>
          </div>
          <div class="diagram__line">
            <div class="diagram__visualisation diagram__visualisation_type_healed" style="width: ${recoveredPercent}%;"></div>
            <div class="diagram__visualisation diagram__visualisation_type_dead" style="width: ${deathsPercent}%;"></div>
          </div>
        </div>`)
  }
}