$.ajax({
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/JFK/LAX/2019-05-01?inboundpartialdate=2019-09-01',
    type: 'GET',
    dataType: 'json',
    headers: {
        'X-RapidAPI-Host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        'X-RapidAPI-Key': 'c06d42dc94msh3abc8988e706decp186610jsn45860a374f3d'
    },
    contentType: 'application/json; charset=utf-8',
    success: function (result) {
        // CallBack(result);
        console.log(result);
    },
    error: function (error) {

    }
});


const flightRoute = (callback) => {
    const flightURL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/JFK/LAX/2019-05-01?inboundpartialdate=2019-09-01';
    console.log(flightURL);
    $.ajax({
        type: 'GET',
        url: flightURL,
        contentType: 'application/json',
        dataType: 'jsonp',
        responseType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'X-RapidAPI-Host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            'X-RapidAPI-Key': 'c06d42dc94msh3abc8988e706decp186610jsn45860a374f3d',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'application/json'            
        },
        success: function (data) {
            if (data.error) {
                console.log(data.error)
                callback('Error in Route', undefined)
            }
            else {
                console.log(data)
         }
        },
        error: function (error) {
            console.log("FAIL....=================");
        }
    });
};



// Retrieval of Airfare Prices
const airfarePrices = (origin, destination, callback) => {

    $.ajax({
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/' + origin + '/' + destination + '/2019-05-01?inboundpartialdate=2019-09-01',
        type: 'GET',
        dataType: 'json',
        headers: {
            'X-RapidAPI-Host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            'X-RapidAPI-Key': 'c06d42dc94msh3abc8988e706decp186610jsn45860a374f3d'
        },
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
            console.log(result)
        },
        error: function (error) {

        }
    });
};