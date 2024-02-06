var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GenericQueue_queue;
var GenericQueue = /** @class */ (function () {
    function GenericQueue() {
        _GenericQueue_queue.set(this, void 0);
        __classPrivateFieldSet(this, _GenericQueue_queue, [], "f");
    }
    ;
    GenericQueue.prototype.enqueue = function (item) {
        __classPrivateFieldGet(this, _GenericQueue_queue, "f").push(item);
    };
    ;
    GenericQueue.prototype.dequeue = function () {
        var popData = __classPrivateFieldGet(this, _GenericQueue_queue, "f").reverse().pop();
        __classPrivateFieldGet(this, _GenericQueue_queue, "f").reverse();
        return popData;
    };
    ;
    GenericQueue.prototype.peek = function () {
        return __classPrivateFieldGet(this, _GenericQueue_queue, "f")[0];
    };
    ;
    GenericQueue.prototype.size = function () {
        return __classPrivateFieldGet(this, _GenericQueue_queue, "f").length;
    };
    ;
    GenericQueue.prototype.print = function () {
        console.log(__classPrivateFieldGet(this, _GenericQueue_queue, "f"));
    };
    return GenericQueue;
}());
_GenericQueue_queue = new WeakMap();
var myQueue = new GenericQueue;
myQueue.enqueue({ id: 1, name: "first" });
myQueue.enqueue({ id: 2, name: "second" });
myQueue.enqueue({ id: 3, name: "third" });
myQueue.enqueue({ id: 4, name: "fourth" });
myQueue.print();
console.log("peek : %o", myQueue.peek());
console.log("size : ".concat(myQueue.size()));
console.log('--dequeue--');
myQueue.dequeue();
myQueue.print();
console.log("peek : %o", myQueue.peek());
console.log("size : ".concat(myQueue.size()));
