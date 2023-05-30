import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([-10, 20, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);

// sorter.sort();

console.log(numbersCollection.data); 

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);

// sorter.sort();
// console.log(charactersCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);


linkedlist.sort();
linkedlist.print();