/**
 * @param {number[]} nums
 * @return {boolean}
 */
// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }
var containsDuplicate = function (nums) {
  // nums.forEach(
  //     (data) => {
  //         console.log(data)
  //     }
  // )
  // for(i = 0; i < nums.length; i++){
  //     for(j = 0; j < i; j++){
  //         console.log(nums[j])
  //     }
  //

  // nums = bubbleSort(nums);
  // console.log(nums)
  // console.log(bubbleSort(nums))
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
    // else{
    //     console.log(nums[i])
    //     console.log(nums[i+1])
    //     return false
    // }
  }
  return false;
};
