function productExceptSelf(nums: number[]): number[] {
    let productArray = [];
    let temp = [];
    for (let index = 0; index < nums.length; index++) {
        temp = removeElementFromArray(nums, nums[index])
        // console.log('nums', nums)

        // console.log('temp', temp)
        productArray.push(multiplyArrayElements(temp))
    }
    // console.log(productArray    )
    // nums.forEach(
    //     (num) => {
    //         let result = 
    //     }
    // )
    return productArray;
};

function multiplyArrayElements(arr) {
    if (arr.length === 0) {
        return 0; // or throw an error, depending on your requirements
    }

    return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

function removeElementFromArray(arr, elementToRemove) {
    return arr.filter(element => element !== elementToRemove);
}