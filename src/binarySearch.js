function binarySearch(arr, target){

  let startIdx = 0;
  let endIdx = arr.length - 1;
  let middleIdx = Math.floor((startIdx + endIdx)/2) ;

  while (arr[middleIdx] !== target && startIdx <= endIdx) {
    if (target > arr[middleIdx]) {
      startIdx = middleIdx + 1;
    } else {
      endIdx = middleIdx - 1;
    }

    middleIdx = Math.floor((startIdx + endIdx)/2);
  }


  if (arr[middleIdx] == target) {
    return middleIdx;
  }

  return -1;
  // add whatever parameters you deem necessary - good luck!
}
