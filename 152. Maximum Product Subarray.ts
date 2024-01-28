// Wrong Answer 114 / 190 testcases passed
function maxProduct(nums: number[]): number {
    let maxProduct = 0;
    if (nums.length === 1) {
        return nums[0];
    }
    let temp = 1;
    for (let index in nums) {
        console.log('nums[index] = ', nums[index], 'nums[parseInt(index + 1)] = ', nums[parseInt(index + 1)], 'temp =', temp)
        if (nums[parseInt(index + 1)]) {
            console.log(1)
            temp = temp * (nums[index] * nums[parseInt(index + 1)])
        } else {
            if (temp > 1) {
                console.log(2)
                temp = temp * nums[parseInt(index) + 1]
            }
            else if (temp <= 1 && temp !== 0) {
                console.log(3)
                temp = temp * nums[parseInt(index) + 1]
            } else {
                console.log(4)
                temp = nums[index]
            }
        }
        if (temp > maxProduct) {
            console.log(5)
            maxProduct = temp
        }
    }
    return maxProduct
};

const nums = [3,-1,4];

console.log(maxProduct((nums)));