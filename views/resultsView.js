import { constants } from '../utils/constants.js'
export const renderResult = ( weather ) => {
    const html = ` <h1 id="weatherCity">${weather.city}</h1>
                 <div id="weatherDescription">${weather.description}</div>
                 <div id="weatherTemperature">${weather.tempreature}</div>
   `
    constants.WEATHER_BOX.style.display = 'block';

    constants.WEATHER_BOX.insertAdjacentHTML( 'afterbegin', html );
}