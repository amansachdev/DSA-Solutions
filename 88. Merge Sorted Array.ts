/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): any {
    for (let i = m, j = 0; j < n; i++, j++) {
      nums1[i] = nums2[j]
    }
  
    return nums1.sort((a, b) => a - b)
  
  };