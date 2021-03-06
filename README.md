# Recap algorithms in Javascript

## Run Test
``` shell
npm test
```

## Seach
- naive approach O(n)
- binary search O(log n)

## Search short string frequency into long string
- naive search - O(m*n), where m is the size of long string and n is size of the short string
- [ ] TODO implement: KMP - O(n) - Knuth–Morris–Pratt, buil PI table to reduce prefix search.

## Sort:
### Quadratic sort algorithms - Time: O(n^2)
- bubble sort
- select sort
- insert sort

### avg: O(n log n) or  worst: O(n^2)
- merge sort
- quick sort

### Integer sort O(nk) n = arrays elements and k= the largest number size from input array
- Radix sort 
Can we do better? Yes but not by making comparisons between the numbers

## Data structure
### Singly Linked List
- push - O(1)
- pop - O(n)
- shift - O(1)
- unshift - O(1)
- get - O(n)
- set - O(n)
- insert - O(n), header or tail: O(1);
- delete - O(n), header or tail: O(1);
- reverse - O(n)
- toArray - O(n)