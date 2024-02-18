function singleNumber(nums: number[]): number {
  const set = new Set<number>();
  nums.forEach((num) => {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  });
  return [...set][0];
}
