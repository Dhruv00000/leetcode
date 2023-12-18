def twoSum(nums: list[int], target: int) -> list[int]:
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """

    for i in range(len(nums)):
        if target - nums[i] in nums and target - nums[i] != nums[i]:
            return [i, nums.index(target - nums[i])]
