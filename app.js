const colors = require('colors')
const {getLocation} = require('./locations/location')
const {getWeather} = require('./weather/weather')
const {argv} = require('./config/yargs')


let getInfo = async (direccion) => {

    try {
        let coors = await getLocation(direccion)
        let temp = await getWeather(coors.lat, coors.lng)
        return `La temperatura en: ${coors.direccion} es de: ${temp.temp}C`.bgCyan
    }catch(e){
        return `No se pudo determinar el clima en: ${direccion}`.bgRed
    }

}

getInfo(argv.direccion)
    .then(response => console.log(response))
    .catch(error => console.log(error))
