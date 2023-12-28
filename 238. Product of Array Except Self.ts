function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;

    // Initialize arrays to store products to the left and right of each element         n
    const leftProducts = new Array(length).fill(1);
    const rightProducts = new Array(length).fill(1);
    const result = new Array(length).fill(1);


    // Compute products to the left of each element
    let leftProduct = 1;
    for (let i = 1; i < length; i++) {
        leftProduct = leftProduct * nums[i - 1];
        leftProducts[i] = leftProduct;
        console.log('leftProduct', leftProduct)
        console.log('leftProducts', leftProducts)
    }

    // Compute products to the right of each element
    let rightProduct = 1;
    for (let i = length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        rightProducts[i] = rightProduct;
        console.log('rightProduct', rightProduct)
        console.log('rightProducts', rightProducts)
    }


    for (let i = 0; i < length; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    // console.log(result)

    // let productArray = [];

    // for (let index = 0; index < nums.length; index++) {
    //     productArray.push(removeElementAtIndex(nums, index)
    //         .reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    //     )
    // }
    // return productArray;
    return result;
};

// function removeElementAtIndex(arr: number[], indexToRemove: number): number[] {
//     return [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + 1)];
// }

//commented solution getting timedout
console.log(productExceptSelf([2, 3, 4, 5]))