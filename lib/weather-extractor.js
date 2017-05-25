var request = require('request')

var weatherExtractor = function() {
}

weatherExtractor.prototype.getWeather = function(city) {
    return new Promise((resolve, reject) => {
        var url = "http://api.openweathermap.org/data/2.5/forecast?q={" + city + "}&appid=facb77d6dfb67ae803a49bb98a186c74"
        request(url, function (error, response) {
            if (error) reject(error)
            resolve(response)
        })
    })
}

module.exports = new weatherExtractor()