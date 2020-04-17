
//first four are algebra 1
//second three are geometry
//array of math youtube links
var mathVideoArray = ["tHYis-DP0oU", "AJNDeVt9UOo", "S_OX3ByvBSc", "3NHSwiv_pSE", "il0EJrY64qE", "ALhv3Rlydig", "aq_XL6FrmGs", "c-szOdzJiWM"];
// what is a variable tHYis-DP0oU
//evaluating an expression with 1 variable AJNDeVt9UOo
//evaluating an expression with 2 variables S_OX3ByvBSc
//simplifying expressions 3NHSwiv_pSE
//terms and labels of geometry il0EJrY64qE
//obtuse acute and right angles ALhv3Rlydig
//parallel & perpendicular lines aq_XL6FrmGs
//array of javascript youtube links
//making a webpage interactive c-szOdzJiWM
//var queryURL = "http://www.khanacademy.org/api/v1/topic/one-dimensional-motion";

var a1 = document.getElementById('variable');
a1.addEventListener('click', videoPlay);

var a2 = document.getElementById('1var');
a2.addEventListener('click', videoPlay2);

var a3 = document.getElementById('2var');
a3.addEventListener('click', videoPlay3);

var a4 = document.getElementById('SimpExp');
a4.addEventListener('click', videoPlay4);

var a5 = document.getElementById('terms');
a5.addEventListener('click', videoPlay5);

var a6 = document.getElementById('angles');
a6.addEventListener('click', videoPlay6);

var a7 = document.getElementById('lines');
a7.addEventListener('click', videoPlay7);
//videoPlay();
function videoPlay() {

    var queryURL = "http://www.khanacademy.org/api/internal/videos/" + mathVideoArray[0];

    //download urls mp4:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var video = response.youtubeId;
        var vid = document.getElementById('video123');

        vid.setAttribute('src', 'https://www.youtube.com/embed/' + video);


    });
}
function videoPlay2() {

    var queryURL = "http://www.khanacademy.org/api/internal/videos/" + mathVideoArray[1];

    //download urls mp4:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var video = response.youtubeId;
        var vid = document.getElementById('video123');

        vid.setAttribute('src', 'https://www.youtube.com/embed/' + video);


    });
}
function videoPlay3() {

    var queryURL = "http://www.khanacademy.org/api/internal/videos/" + mathVideoArray[2];

    //download urls mp4:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var video = response.youtubeId;
        var vid = document.getElementById('video123');

        vid.setAttribute('src', 'https://www.youtube.com/embed/' + video);


    });
}
function videoPlay4() {

    var queryURL = "http://www.khanacademy.org/api/internal/videos/" + mathVideoArray[3];

    //download urls mp4:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var video = response.youtubeId;
        var vid = document.getElementById('video123');

        vid.setAttribute('src', 'https://www.youtube.com/embed/' + video);


    });
}
function videoPlay5() {

    var queryURL = "http://www.khanacademy.org/api/internal/videos/" + mathVideoArray[4];

    //download urls mp4:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var video = response.youtubeId;
        var vid = document.getElementById('video123');

        vid.setAttribute('src', 'https://www.youtube.com/embed/' + video);


    });
}
function videoPlay6() {

    var queryURL = "http://www.khanacademy.org/api/internal/videos/" + mathVideoArray[5];

    //download urls mp4:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var video = response.youtubeId;
        var vid = document.getElementById('video123');

        vid.setAttribute('src', 'https://www.youtube.com/embed/' + video);


    });
}
function videoPlay7() {

    var queryURL = "http://www.khanacademy.org/api/internal/videos/" + mathVideoArray[6];

    //download urls mp4:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var video = response.youtubeId;
        var vid = document.getElementById('video123');

        vid.setAttribute('src', 'https://www.youtube.com/embed/' + video);


    });
}

var APIKey = "6d58d3b18d5df4c85f443a943955e08c";

var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=New York City,US&appid=" + APIKey;

$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {

  console.log(response);
  var Temp = response.main.temp;
  var fTemp = Temp*9/5-459.67;
  var fTemp2 = Math.trunc(fTemp);
  console.log(fTemp2);
  var screenTemp = document.getElementById("temperature");
  var stringTemp = "Temperature: "+fTemp2+" F";
  screenTemp.innerHTML = stringTemp;
  var windSpeed = response.wind.speed;
  var screenWindSpeed = document.getElementById("wind-speed");
  var stringWind = "Wind Speed: "+windSpeed+" MPH";
  screenWindSpeed.innerHTML = stringWind;
  var feels = response.main.feels_like;
  var fFeels = feels*9/5-459.67;
  var fFeels2 = Math.trunc(fFeels);
  var screenFeels = document.getElementById("feels");
  var stringFeels = "Feels Like: "+fFeels2+" F";
  screenFeels.innerHTML = stringFeels;
})

