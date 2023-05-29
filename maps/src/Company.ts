import modnarjs from "modnarjs";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = modnarjs.name.lName() + " " + 'ltd';
    this.catchPhrase = modnarjs.name.fName() + " " + "phrase";
    this.location = {
      lat: modnarjs.number.float()*-1/10,
      lng: modnarjs.number.float()/10
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>CatchPhrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}