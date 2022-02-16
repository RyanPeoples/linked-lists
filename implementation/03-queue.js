const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val)
        this.length++;
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        };
        this.tail.next = newNode;
        this.tail = newNode;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(!this.head) return null;

        let val = this.head.value;
        this.head = this.head.next;
        this.length--;
        if(this.length ===0 ) {
            this.head = null;
            this.tail = null;
        }
        return val;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
