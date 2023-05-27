const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40]; // creating a tuple 

const sprite: Drink = ['clear', true, 40];

const tea: Drink = ['brown', false, 0];