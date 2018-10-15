const colors = require('colors')
const {getLocation} = require('./locations/location')
require ('./config/const')
const argv = require('yargs')
            .options({
                direccion: {
                    alias: 'd',
                    desc: 'Direccion de la ciudad para obtener el clima',
                    demand: true
                    }
                }).argv;

getLocation(argv.direccion)
                .then(response => {
                    console.log(`Direccion: ${response.direccion}`.bgGreen)
                    console.log(`Longitud: ${response.lat}`.cyan)
                    console.log(`Latitud: ${response.lng}`.cyan)
                })
                .catch(error => console.log(error))