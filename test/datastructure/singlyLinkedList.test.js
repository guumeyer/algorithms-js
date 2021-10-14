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