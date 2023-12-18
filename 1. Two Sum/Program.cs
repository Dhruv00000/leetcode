using System;
using System.Collections.Generic;

List<int> twoSum(List<int> nums, int target) {
    foreach(int num in nums) {
        if (target != num * 2 && nums.Contains(target - num)) {
            List<int> output = new();
            output.Add(nums.IndexOf(target - num));
            output.Add(nums.IndexOf(num));
            return output;
        }
    }

    return new List<int>();
}
