function isPalindrome(s: string): boolean {
    return s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase() === s.replace(/[^0-9a-zA-Z]/g,"").split("").reverse().join("").toLowerCase()
};