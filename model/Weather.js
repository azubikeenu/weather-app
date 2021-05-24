import { constants } from '../utils/constants.js'
export default class Weather {
    constructor( query ) {
        this.city = query
    }
    async searchWeather () {
        try {
            const res = await axios( 'http://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: this.city,
                    units: 'metric',
                    appid: constants.API_KEY
                }
            } )
            this.description = res.data.weather[0].description;
            this.tempreature = res.data.main.temp;
        } catch ( err ) {
            console.log( err )
        }
    }
    formatTemperature () {
        this.tempreature = ( ( this.tempreature * 1.8 ) + 32 ).toFixed( 2 ) + 'F.';
    }
}