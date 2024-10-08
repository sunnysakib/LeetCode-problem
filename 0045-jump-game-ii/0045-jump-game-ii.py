class Solution:
    def jump(self, nums: List[int]) -> int:
        arr = [0]
        for i in range(1,len(nums)):
            arr.append(-1)

        for k in range(len(nums)-1):
            j = 1
            while j<=nums[k] and j+k < len(arr):
                if arr[j+k] == -1:
                    arr[j+k] = k + 1

                if arr[j+k] - arr[k] > 1:
                    arr[j+k] = arr[k] + 1
                j+=1
        return arr.pop()

