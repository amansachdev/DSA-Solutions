function twoSum(nums: number[], target: number): number[] {
    const hashMap = {};

    //[2,7,11,15]

    //0

    for (let i=0; i < nums.length; i++) {

        const difference = target - nums[i];
        // -7 = 2 - 9
        // 2 = 7 - 9

        // if (-7 in {})
        // if (2 in {2:0})
        if (difference in hashMap){
            // console.log(i)
            //[hashMap[2],1]
            return[hashMap[difference],i]
        }

        // {2:0}
        hashMap[nums[i]] = i;
    }
};