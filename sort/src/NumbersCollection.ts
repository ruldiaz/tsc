export class NumbersCollection {
    
    constructor(public data: number[]) {

    }

    swap( leftIndex: number, rightIndex: number ): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }

    compare( leftIndex: number, rightIndex: number ): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    get length(): number { // by adding the keyword 'get' you dont have to put parenthesis when calling the function, just like a property
        return this.data.length;
    }

}