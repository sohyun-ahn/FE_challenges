interface Data{
    id: number;
    name: string;
}

class GenericQueue<T>{
    #queue: T[];

    constructor() {
        this.#queue = [];
    };

    enqueue(item: T): void{
        this.#queue.push(item);
    };

    dequeue(): T | undefined{
        const popData = this.#queue.reverse().pop()
        this.#queue.reverse()
        return popData
    };

    peek(): T{
        return this.#queue[0]
    };

    size(): number{
        return this.#queue.length
    };

    print(){
        console.log(this.#queue)
    }
}

let myQueue = new GenericQueue<Data>

myQueue.enqueue({ id : 1, name : "first"})
myQueue.enqueue({ id : 2, name : "second"})
myQueue.enqueue({ id : 3, name : "third"})
myQueue.enqueue({ id : 4, name : "fourth"})
myQueue.print();
console.log(`peek : %o`, myQueue.peek());
console.log(`size : ${myQueue.size()}`);
console.log('--dequeue--');
myQueue.dequeue();
myQueue.print();
console.log(`peek : %o`, myQueue.peek());
console.log(`size : ${myQueue.size()}`);