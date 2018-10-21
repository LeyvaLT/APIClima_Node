const axios = require('axios')

const getWeather  = async (lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=742d1e4f2990bf2ce2fff58706d5e48e`)
    return {temp: resp.data.main.temp}
}

module.exports = {
    getWeather
}
