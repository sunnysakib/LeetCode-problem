class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        a = n//2
        nums.sort()
        return nums[a]