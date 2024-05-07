function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  let count = 0;
  const queue = [beginWord];
  while (queue.length) {
    const size = queue.length;
    count++;
    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (current === endWord) return count;
      for (let j = 0; j < current.length; j++) {
        for (let k = 97; k <= 122; k++) {
          const newWord =
            current.slice(0, j) + String.fromCharCode(k) + current.slice(j + 1);
          if (wordSet.has(newWord)) {
            queue.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
  }
  return 0;
}
