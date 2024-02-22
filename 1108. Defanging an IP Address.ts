function defangIPaddr(address: string): string {
    let index = 0
    let arr = address.split("")
    arr.forEach((x) => {
        if (x === '.') {
            arr[index] = '[.]'
        }
        index++;
    })
    return arr.join("")
};