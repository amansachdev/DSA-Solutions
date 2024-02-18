function findWordsContaining(words: string[], x: string): number[] {
  let resultArray: number[] = [];
  let index = 0;
  words.forEach((word) => {
    if (word.includes(x)) {
      resultArray.push(index);
    }
    index++;
  });
  return resultArray;
}
