export {};

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i <= nums.length; i++) {
    if (target - nums[i] in nums && target - nums[i] != nums[i]) {
      return [nums.indexOf(target - nums[i]), i];
    }
  }

  return [];
}
