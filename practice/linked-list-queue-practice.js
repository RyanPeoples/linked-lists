// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let count =0;
        let curr = this.head;
        while(curr){
            count++;
            curr = curr.next;
        }
        return count;
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;
        while(curr){
            sum+=curr.value;
            curr= curr.next;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes()/this.listLength();

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr =this.head;
        for(let i=0; i<n ; i++){
            curr = curr.next;
        }
        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

            if(this.listLength() %2 ===0){
                let count = Math.ceil(this.listLength()/2);
                return this.findNthNode(count-1);

            }
            else{
                let count = Math.floor(this.listLength()/2);
                return this.findNthNode(count);

            }

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const revList = new SinglyLinkedList();
        let arr = []
        let curr = this.head;
        while(curr){
            arr.push(curr.value);
            curr=curr.next
        }

        for(let i = arr.length-1;i>=0;i--){
            revList.addToTail(arr[i])
        }
        return revList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if(!this.head) return;
        let curr = this.head;
        let next = curr.next;
        let prev = null;

        while(next){
            next = curr.next;
            curr.next = prev
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;
        // let count = this.listLength();

        // while(count>0){
        //     count--;
        //     let node = this.findNthNode(count)
        //     console.log(node.value)
        //     this.addToTail(node.value);
        //     let currNode = this.findNthNode(count)
        //     currNode = null;
        // }
        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let count = 0;
        let curr = this.head;
        while (curr) {
            count++;
            curr = curr.next
        }

        while (count > 0) {
            count--;
            this.addToTail(curr);
            curr = curr.prev;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
