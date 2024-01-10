const input = "a2b10cd2";

function decryptTheString(input: string, k: number) {
  let result = "";
  let buffer = "";
  for (let index = 0; index < input.length; index++) {
    if (!Number.isNaN(parseInt(input[index]))) {
      let count = 0;
      while (!Number.isNaN(parseInt(input[index]))) {
        count = count * 10 + parseInt(input[index]);
        index++;
      }

      while (count > 0) {
        result += buffer;
        count--;
      }
      index--;
      buffer = "";
    } else {
      buffer += input[index];
    }
  }
  return {
    decrypted: result,
    index: result[k - 1],
  };
}
