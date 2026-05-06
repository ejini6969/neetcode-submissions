class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        freq = [0] * 1001
        freq2 = [0] * 1001
        ans = []
        for n in nums1:
            freq[n] = 1
        for n in nums2:
            freq2[n] = 1
        for i in range(1001):
            if freq[i] and freq2[i]:
                ans.append(i)
        return ans