import { User } from "./User";
import { Company } from "./Company";

// instructions to every other class on how to be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
    color: string
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor( divId: string ) {
        const element = document.getElementById(divId);
        if(element instanceof HTMLElement){
            this.googleMap = new google.maps.Map(element, {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            });
        }else{
            throw new Error(`Element with ID '${divId}' not found.`)
        }
    }


addMarker( mappable: Mappable ): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}