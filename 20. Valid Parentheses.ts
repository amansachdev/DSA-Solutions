function isValid(s: string): boolean {
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let openingBracketStack: string[] = [];

  for (let index = 0; index < s.length; index++) {
    if (["(", "[", "{"].includes(s[index])) {
      openingBracketStack.push(s[index]);
    } else if (openingBracketStack.pop() !== bracketMap[s[index]]) {
      return false;
    }
  }

  return !openingBracketStack.length;
}
