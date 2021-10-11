function naiveSearchString(word, target) {
  const characters = Array.from(word);
  const targetChars = Array.from(target);
  const result = [];
  for (let i = 0; i < characters.length; i++) {
    let targetIdx = 0;
    for (let j = i; j < (i+ targetChars.length); j++) {
      if (characters[j] !== targetChars[targetIdx]) break;
      targetIdx ++;
    }

    if (targetIdx === targetChars.length) {
      result.push(i);
    }
  }
  return result.length || -1;
}
