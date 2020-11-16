class Estimator {
    #_estimateData = [];

    constructor(initialData = []) {
        this._estimateData = initialData;
    }

    add(dataRow) {
        // TODO add validation
        this._estimateData.push(dataRow)
    }

    get() {
        return this._estimateData;
    }
}

export default new Estimator();