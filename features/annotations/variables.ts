const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let newVariable: void;
let symbol: symbol = Symbol();

let newArray: number[];

newArray =  [ 1, 2, 3 ];

console.log(newArray);

// classes

class Car {

}

const car: Car = new Car();


// object literal

const pointObj: { x: number; y: number } = {
    x: 10,
    y: 20
}

// function

const logNumber: ( i: number ) => void = ( i: number ) => {
    console.log( i );
  
}

logNumber(2);

// parsing a json object

const json = '{"x": 10, "y": 20}';

const coordinates: {x: number; y: number} = JSON.parse(json);

console.log(coordinates);

    // using type inference

let words = ['red','green','blue'];
let foundWord: boolean = false;

for(let i=0 ; i<words.length ; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

console.log(foundWord);

let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false || 0;

for(let i=0 ; i<numbers.length ; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}

console.log(numberAboveZero);