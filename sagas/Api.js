
function* getDataFromApi() {
    console.log('fetching data')
    const response = yield fetch('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=015LPo0E1fX4CLcGGM0txNkexg9HZ4Jy')
    const data = yield response.json()
    return data.results;
}

export const Api = {
    getDataFromApi,
}