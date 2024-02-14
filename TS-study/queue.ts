// push 메서드로 새로운 요소를 큐의 뒤쪽에 추가하고, shift 메서드로 가장 앞쪽의 요소, 즉 가장 오래된 요소를 제거합니다.
// 여기에 Queue<T> 클래스를 구현하세요.
class Queue<T>{
    private queue: T[];
    constructor(){
        this.queue = [];
    }

    size(): number{
        return this.queue.length
    }
    enqueue(item: T): void{
        this.queue.push(item)
    }
    dequeue(): (T | undefined){
        return this.queue.shift()
    }
}

// 사용 예시
const queue = new Queue<string>();
queue.enqueue("Apple");
queue.enqueue("Banana");
console.log(queue.dequeue()); // Apple
console.log(`Queue size: ${queue.size()}`); // Queue size: 1