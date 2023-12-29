function isPalindrome(s: string): boolean {
    return s.replace(/[^a-zA-Z]/g, "").toLowerCase() === s.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase()
};