import {dataCovid} from '../index';

export default class Api {
  constructor(url) {
    this.url = url;
  }

  dataCovidApi() {
    fetch(this.url)
      .then(res => res.json())
      .then(arr => {
        return arr;
      })
      .then(dataCovid)
      .catch(err => console.log(err))
  }
}

