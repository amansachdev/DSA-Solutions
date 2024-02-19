function getConcatenation(nums: number[]): number[] {
    nums.forEach((num) => nums.push(num));
    return nums;
};