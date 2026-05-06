class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        freq = [0] * 1001
        ans = set()
        for n in nums1:
            freq[n] = 1
        for n in nums2:
            if freq[n] and n not in ans:
                ans.add(n)
        return list(ans)
