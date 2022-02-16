// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head; //node
        this.head = newNode; //list
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;


        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(this.length < 1) return undefined;

        let value = this.head;
        if(this.length ===1) {
            this.head = null;
            this.length--;
            return value;
        }
        this.head = this.head.next;
        this.length --;
        return value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if(!this.head) return undefined;
        let curr = this.head;
        let prev;
        while(curr.next){
            prev = curr;
            curr = curr.next;
        }
        if(!prev){
            this.head=null;
        } else{
            prev.next = null;
        // curr = null;
        }
        this.length--;
        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if(this.length>0){
            return this.head.value;
        } else return undefined;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        let curr = this.head;
        while(curr){
            console.log(curr.value)
            curr = curr.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
