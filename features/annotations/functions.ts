const add = ( a: number, b: number ): number => {
    return a + b;
}

console.log(add(2,2));

const anotherAdd: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b;
} 

console.log(anotherAdd(2,2));