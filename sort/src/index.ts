import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([-10, 20, -5, 0]);
const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data); 