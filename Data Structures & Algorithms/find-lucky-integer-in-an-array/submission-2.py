class Solution:
    def findLucky(self, arr: List[int]) -> int:
        mx, mn, freq = 0, 501, [0] * 501
        for n in arr:
            mx = max(mx, n)
            mn = min(mn, n)
            freq[n] += 1
        for i in range(mx, mn - 1, -1):
            if freq[i] == i:
                return i
        return -1