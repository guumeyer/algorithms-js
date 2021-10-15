const SinglyLinkedList = require('../../src/datastructure/singlyLinkedList');

test('Should push an item into list and tail and head should be the same item', function() {
    const list = new SinglyLinkedList();
    list.push('test');

    expect(list.length).toBe(1);
    expect(list.head.value).toBe('test');
    expect(list.tail.value).toBe('test');
});

test('Should push two items into list', function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');

    expect(list.length).toBe(2);
    expect(list.head.value).toBe('test a');
    expect(list.tail.value).toBe('test b');
});

test('Should push three items into list', function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);
    expect(list.head.value).toBe('test a');
    expect(list.tail.value).toBe('test c');
});

test('Should pop last item from list', function() {

    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const removedNode = list.pop();

    expect(list.length).toBe(2);
    expect(list.head.value).toBe('test a');
    expect(list.tail.value).toBe('test b');
    expect(removedNode.value).toBe('test c');
});

test('Should pop all items from list and return empty linked list', function() {

    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const removeC = list.pop();
    const removeB = list.pop();
    const removeA = list.pop();
    const empty = list.pop();

    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(removeC.value).toBe('test c');
    expect(removeB.value).toBe('test b');
    expect(removeA.value).toBe('test a');
    expect(empty).toBeNull();
});

test("Should shift header", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const removedNode = list.shift();

    expect(list.length).toBe(2);
    expect(list.head.value).toBe('test b');
    expect(list.tail.value).toBe('test c');
    expect(removedNode.value).toBe('test a');
});

test("Should not shift header from empty list", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    list.shift();
    list.shift();
    list.shift();
    const removedNode = list.shift();

    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(removedNode).toBeNull();
});

test('Should unshift a new item in empty list', function(){
    const list = new SinglyLinkedList();
    list.unshift('test a');

    expect(list.length).toBe(1);
    expect(list.head.value).toBe('test a');
    expect(list.tail.value).toBe('test a');
});

test('Should unshift a new item at header', function(){
    const list = new SinglyLinkedList();
    list.unshift('test a');

    expect(list.length).toBe(1);
    expect(list.head.value).toBe('test a');
    expect(list.tail.value).toBe('test a');

    list.unshift('test b');
    expect(list.length).toBe(2);
    expect(list.head.value).toBe('test b');
    expect(list.tail.value).toBe('test a');
});

test("Should get index 1 list", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const node = list.get(1);
    const nodea = list.get(0);
    const nodec = list.get(2);

    expect(node.value).toBe('test b');
    expect(nodea.value).toBe('test a');
    expect(nodec.value).toBe('test c');
});

test("Should return null by get value with negative index", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const node = list.get(-1);

    expect(node).toBeNull();
});

test("Should return null by get value with overflow index", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const node = list.get(6);

    expect(node).toBeNull();
});

test("Should set value by index", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.set(1, 'test f');

    expect(result).toBeTruthy();
});

test("Shouldnot set value by invalid index", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.set(-1, 'test f');

    expect(result).toBeFalsy();
});

test("Should insert new element on index 1", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.insert(1, 'test f');
    const node = list.get(1);

    expect(result).toBeTruthy();
    expect(list.length).toBe(4);
});

test("Should insert new element as head", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.insert(0, 'test r');

    expect(result).toBeTruthy();
    expect(list.length).toBe(4);
    expect(list.head.value).toBe('test r');
});

test("Should insert new element as tail", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.insert(3, 'test t');

    expect(result).toBeTruthy();
    expect(list.length).toBe(4);
    expect(list.tail.value).toBe('test t');
});

test("Shouldnot insert when index is negative", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.insert(-1, 'test t');

    expect(result).toBeFalsy();
    expect(list.length).toBe(3);
});

test("Shouldnot insert when index is overflow", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.insert(100, 'test t');

    expect(result).toBeFalsy();
    expect(list.length).toBe(3);
});

test("Should remove item from idex 1", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.delete(1);

    expect(result).toBeTruthy();
    expect(list.length).toBe(2);
});

test("Should remove item from header", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.delete(0);

    expect(result).toBeTruthy();
    expect(list.length).toBe(2);
});

test("Should remove item from tail", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.delete(2);

    expect(result).toBeTruthy();
    expect(list.length).toBe(2);
});

test("Shouldnot remove item when idex is negative", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.delete(-1);

    expect(result).toBeFalsy();
    expect(list.length).toBe(3);
});

test("Shouldnot remove item when idex is overflow", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.delete(100);

    expect(result).toBeFalsy();
    expect(list.length).toBe(3);
});

test("Should reverse list", function() {
    const list = new SinglyLinkedList();
    list.push('test a');
    list.push('test b');
    list.push('test c');

    expect(list.length).toBe(3);

    const result = list.reverse();
    const node1 = list.head;
    const node2 = list.get(1);
    const node3 = list.tail;

    expect(result).toBeTruthy();
    expect(list.length).toBe(3);

    expect(node1.value).toBe('test c');
    expect(node2.value).toBe('test b');
    expect(node3.value).toBe('test a');
   
});