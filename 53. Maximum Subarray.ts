function maxSubArray(nums: number[]): number {
  let maxSum = 0;
  let arrayOfSolutions = [];

  if (nums.length === 1) {
    return nums[0];
  }

  for (let index = 0; index < nums.length; index++) {
    if (maxSum < nums[index]) {
      maxSum = maxSum + nums[index];
      arrayOfSolutions.push(maxSum);
    } else if (nums[index] + maxSum < 0) {
      maxSum = 0;
      arrayOfSolutions.push(maxSum);
    } else {
      maxSum = maxSum + nums[index];
      arrayOfSolutions.push(maxSum);
    }
  }

  return Math.max(...arrayOfSolutions);
}
