const SinglyLinkedList = require('../../src/datastructure/SinglyLinkedList');

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