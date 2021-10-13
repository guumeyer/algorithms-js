# Recap algorithms in Javascript

# Seach
- naive approach O(n)
- binary search O(log n)

## Search short string frequency into long string
- naive search - O(m*n), where m is the size of long string and n is size of the short string
- [ ] TODO implement: KMP - O(n) - Knuth–Morris–Pratt, buil PI table to reduce prefix search.

## Quadratic sort algorithms - Time: O(n^2)
- bubble sort
- select sort
- insert sort

## avg: O(n log n) or  worst: O(n^2)
- merge sort
- quick sort

## Integer sort
- Can we do better? Yes but not by making comparisons between the numbers
- Radix sort 

## Run Test
``` shell
npm test
```
