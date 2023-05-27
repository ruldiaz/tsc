class Vehicle {
  constructor( public color: string ){
  }
  

  protected honk(): void {
    console.log('honking!');
  }
}

const vehicle = new Vehicle('orange');


console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('driving inside car...');
  }

  startDriving() {
    this.drive();
    this.honk();
  }
}
const car = new Car(4, 'black');
car.startDriving();

console.log(car.color);