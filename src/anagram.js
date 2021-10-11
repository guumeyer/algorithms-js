function validAnagram(a, b) {

  if (a.length != b.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < a.length; i++) {
    lookup[a[i]] = lookup[a[i]] || 0;
    lookup[a[i]]++;
  }

  for (let i = 0; i < b.length; i++) {

    if (lookup[b[i]] == null) {
      return false;
    }

    lookup[b[i]]--;
    if (lookup[b[i]] <= 0) {
      delete lookup[b[i]];
    }
  }

  return Object.keys(lookup).length == 0;
}
