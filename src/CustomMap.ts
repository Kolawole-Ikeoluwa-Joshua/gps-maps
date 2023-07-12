// interface - Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
    location: {
        lat: number,
        lng: number
    };
}


// a class to abstract google map functionalities not used in this app that can break codebase
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

    // class method/function
    addMaker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        }); 
    }
}