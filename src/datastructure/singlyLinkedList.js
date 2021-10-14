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

    push(value) {
        const node = new Node(value);
        node.next = this.tail;
        this.head = this.head || node;
        this.tail = node;
        this.length++;
    }
}

module.exports = SinglyLinkedList;