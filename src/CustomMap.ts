// a class to abstract google map functionalities not used in app that can break codebase
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}