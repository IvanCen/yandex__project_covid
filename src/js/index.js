import Api from './class/Api.js';
import InfoCovid from './class/InfoCovid.js';
import ItemCovid from './class/ItemCovid.js';
import RenderCovid from './class/RenderCovid.js';
import './../pages/style.css';

const header = document.querySelector(".page__header");
const totalNumber = document.querySelector(".total__number");
const headerTotal = document.querySelector(".header__total");
const ratingTable = document.querySelector("#rating-top");
const ratingRussia = document.querySelector("#rating-russia");
const diagram = document.querySelector(".diagram");

const paramCovid = {
    totalNumber,
    headerTotal,
};

const api = new Api();
const infoCovid = new InfoCovid(paramCovid);
const itemCovidTop = new ItemCovid(ratingTable);
const itemCovidRussia = new ItemCovid(ratingRussia);
const itemCovidPercent = new ItemCovid(diagram);
const renderCovid = new RenderCovid();

function countAllConfirmed(arr) {
    return arr.reduce(function (sum, current) {
        return sum + current.confirmed;
    }, 0)
}

/* function filteredChina(arr) {
  const arrChina = arr.filter(item => item.countryRegion === "China")
  function chinaAllRegionSumParam(arr, param) {
    return arr.reduce(function (sum, current) {
      return sum += current;
    }, 0)
  }
  console.log(chinaAllRegionSumParam(arrChina, confirmed))
  //console.log(arrChina)
} */

function filteredCountry(arr, country) {
    return arr.filter(item => item.countryRegion === country)
}

function filteredArrByQuantity(arr, quantity) {
    return arr.slice(0, quantity);
}

export function dataCovid(dataArr) {
    infoCovid.setDataCovidConfirmed(countAllConfirmed(dataArr));
    renderCovid.renderTop(filteredArrByQuantity(dataArr, 10), itemCovidTop);
    renderCovid.renderTop(filteredCountry(dataArr, "Russia"), itemCovidRussia);
    renderCovid.renderPercent(filteredArrByQuantity(dataArr, 3), itemCovidPercent);
}

function scrolling(el) {
    if (window.pageYOffset > 0) {
        el.style.top = '0px'
    } else {
        el.style.top = '-60px'
    }
}

api.dataCovidApi();

window.addEventListener('scroll', () => scrolling(header));

