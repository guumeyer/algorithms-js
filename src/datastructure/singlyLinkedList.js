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
        return true;
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

    // time: O(1)
    unshift(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.tail = this.tail || node;
        this.length ++;
        return true;
    }

    // time: O(n)
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        

        for (let i = 0; i < index; i ++) {
            current = current.next;
        }

        return current;
    }

    // O(n)
    set(index, value) {
        const current = this.get(index);
        if (!current) return false;
        current.value = value;
        return true;
    }

    // Add on tail or header is O(1), middle O(n)
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        const newNode = new Node(value);
        const previews = this.get(index-1);
        newNode.next = previews.next;
        previews.next = newNode;
        this.length++;
        return true;
    }
}

module.exports = SinglyLinkedList;