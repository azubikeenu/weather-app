export class UIComponent {
    constructor() {
        this.text = document.querySelector( '#city' );
        this.button = document.querySelector( 'button' );
    }
    getCityValue () {
        return this.text.value;
    }
    performQuery ( func ) {
        this.button.addEventListener( 'click', func )
    }


}