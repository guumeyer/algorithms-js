class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // time: O(1)
    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    // time: O(n)
    pop() {
        if (this.head == null) return null;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // time: O(1)
    shift() {
        if (!this.head) return null;
        const currentHead =  this.head;
        this.head = this.head.next;
        this.length --;
        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.tail = this.tail || node;
        this.length ++;
    }

}

module.exports = SinglyLinkedList;