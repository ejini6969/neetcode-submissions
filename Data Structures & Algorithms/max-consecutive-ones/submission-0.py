class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        ans, ones = 0, 0
        for n in nums:
            if n:
                ones += 1
            else:
                ans = max(ans, ones)
                ones = 0
        return max(ans, ones)