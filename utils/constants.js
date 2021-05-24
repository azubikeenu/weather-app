export const constants = {
    API_KEY: '2355d5ad0b131cc3a01bbc1ca5dbf8ff',
    WEATHER_BOX: document.querySelector( "#weather" ),
    LOADER: document.querySelector( '#load' )
}


export const renderLoader = () => {
    constants.LOADER.style.display = 'block';
}

export const clearInputs = () => {
    constants.WEATHER_BOX.style.display = "none";
    constants.WEATHER_BOX.innerHTML = "";

}

export const removeLoader = () => {
    constants.LOADER.style.display = 'none';

}