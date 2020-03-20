export default class InfoCovid {
    constructor(paramCovid) {
        this.paramCovid = paramCovid;

    }

    setDataCovidConfirmed(allConfirmed) {
        this.paramCovid.totalNumber.textContent = allConfirmed;
        this.paramCovid.headerTotal.textContent = allConfirmed;
    }

}