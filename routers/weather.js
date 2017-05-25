var express = require('express');
var weatherExtractor = require(__modules + '/weather-extractor');

module.exports = function(app) {
    var router = express.Router();

    router.get('/api/weather', function(req, res) {
        weatherExtractor.getWeather('Campinas').then(function(result){
            console.log('result: ', result);
        });
    });

    app.use('/api/weather', router); 
}