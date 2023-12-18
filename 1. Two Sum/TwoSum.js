function twoSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (target - nums[i] in nums && target - nums[i] != nums[i]) {
      return [nums.indexOf(target - nums[i]), i];
    }
  }
}
