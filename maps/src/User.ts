import modnarjs from "modnarjs";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = modnarjs.name.fName();
    this.location = {
      lat: modnarjs.number.float()*-1/10,
      lng: modnarjs.number.float()/10
    }

  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}