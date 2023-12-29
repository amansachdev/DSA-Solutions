//4 / 142 testcases passed
function longestPalindrome(s: string): string {
    let result;
    let length = 0;
    let temp = '';
    let stringToArray = s.split("");
    let tempArray = []

    for (const index in stringToArray) {
        console.log(
            `
            index ${index} temp ${temp} arrayelement ${stringToArray[index]} pallindrome ${isPalindrome(temp + stringToArray[index])}
            `
        )
        if (isPalindrome(temp + stringToArray[index])) {
            length++;
            temp = temp + stringToArray[index];
            tempArray.push(temp)
        } else {
            temp = temp + stringToArray[index];
            tempArray.push(temp)
            // temp = stringToArray[index];
        }
    }

    return tempArray[length];

};

function isPalindrome(s: string): boolean {
    const trimmedString = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    return trimmedString === trimmedString.split("").reverse().join("");
};