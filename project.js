




function fetchCovidUpdate(){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-live-stats.p.rapidapi.com/country/list",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-live-stats.p.rapidapi.com",
            "x-rapidapi-key": "c5de5819dfmsh0cabf373f4e4d56p18a05bjsn8cbfe5ee0079"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}


function fetchLiveData(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-live-stats.p.rapidapi.com/livestats",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-live-stats.p.rapidapi.com",
            "x-rapidapi-key": "c5de5819dfmsh0cabf373f4e4d56p18a05bjsn8cbfe5ee0079"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        fetchUsaAndpopulateBanner(response);
    });
}

$(document).ready(function() {

    throttleLiveData();
});

function throttleLiveData(){

    var lastRun = localStorage.getItem('lastRunTime')

    var curTime = seconds_since_epoch();

    if(curTime > (lastRun + 1800) ){

        console.log("fetching live using api");
        fetchLiveData();

    } else {

        console.log("using data from localStorage");
        var totalCases = localStorage.getItem('totalCases')
        var newCases = localStorage.getItem('newCases')

        populateBanner(totalCases, newCases);
    }

}


function fetchUsaAndpopulateBanner(jsonPkt){

    var jsonUSA = getDataForUSA(jsonPkt);

    populateBanner(jsonUSA.totalCases, jsonUSA.newCases);
    saveToLocalStorage(jsonUSA.totalCases, jsonUSA.newCases);
}

function populateBanner(totalCases, newCases){
    $(".footerBanner").text("Covid-19 USA:   Total Cases - " +  totalCases + "   New Cases today - " + newCases );
}


function getDataForUSA(jsonPkt){

    for(var x=0; x < jsonPkt.countryWise.length; x++){
        console.log("checking - " , jsonPkt.countryWise[x]);
        if(jsonPkt.countryWise[x].country == "USA")
            return jsonPkt.countryWise[x];
    }

    return null;
}

function saveToLocalStorage(totalCases, newCases ){

    var curTime = seconds_since_epoch();

    localStorage.setItem('totalCases', totalCases);
    localStorage.setItem('newCases', newCases);
    localStorage.setItem('lastRunTime', curTime);

}

function seconds_since_epoch(){ return Math.floor( Date.now() / 1000 ) }