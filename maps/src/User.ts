import modnarjs from "modnarjs";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

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