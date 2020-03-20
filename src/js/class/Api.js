import {dataCovid} from '../index';

export default class Api {
    constructor() {

    }

    dataCovidApi() {
        fetch('https://covid19.mathdro.id/api/confirmed')
            .then(res => res.json())
            .then(arr => {
                return arr;
            })
            .then(dataCovid)
            .catch(err => console.log(err))
    }
}

