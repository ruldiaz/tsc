import casual from 'casual';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = casual._name();
    this.location = {
      lat: parseFloat(casual._latitude()),
      lng: parseFloat(casual._longitude())
    }
  }
}