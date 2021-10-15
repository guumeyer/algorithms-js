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
        return this;
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
        return this;
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

    // Tail and header: O(1), Middle: O(n)
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        const newNode = new Node(value);
        const previews = this.get(index-1);
        newNode.next = previews.next;
        previews.next = newNode;

        this.length++;
    
        return true;
    }
    // tail and header: O(1), middle: O(n)
    delete(index) {
        if (index < 0 || index > this.length) return null;
        if (index === (this.length -1) ) return !!this.pop();
        if (index === 0) return !!this.shift();
    
        const prevNode = this.get((index - 1));
        const remodeNode = prevNode.next;
        prevNode.next = remodeNode.next;

        this.length--;

        return true;
    }

    // O(n)
    reverse() {
        if (!this.head) return;
        const newTail = new Node(this.head.value);
        let prev = newTail;
        let current = this.head.next;
        while(current) {
            const temp = current;
            current = current.next;
            temp.next = prev;
            prev = temp;
        }

        this.head = prev;
        this.tail = newTail;

        return this;
    }
}

module.exports = SinglyLinkedList;