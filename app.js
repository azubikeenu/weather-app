import { santizeQuery } from './utils/santize.js'
import { isValid } from './utils/isvalid.js'
import Weather from './model/Weather.js'
import { renderLoader, constants, clearInputs, removeLoader } from './utils/constants.js'
import { renderResult } from './views/resultsView.js'


export const run = ( component ) => {

    component.performQuery( async () => {
        const input = component.getCityValue();
        if ( !isValid( input ) ) {
            return alert( "Search field cannot be empty" )
        }
        const [query] = santizeQuery( input );
        const weather = new Weather( query );
        // prepare UI for results
        clearInputs()
        renderLoader( constants.WEATHER_BOX );
        //perform query
        await weather.searchWeather();
        // format tempreature
        weather.formatTemperature()
        //prepare the UI for results
        removeLoader()
        // render results to the UI
        renderResult( weather )

    } )


}