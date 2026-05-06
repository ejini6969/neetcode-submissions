class Solution {
    intersection(nums1, nums2) {
        let freq = Array(1001).fill(0), ans = new Set()
        for(const n of nums1)
            freq[n] = 1
        for(const n of nums2)
            if(freq[n] && !ans.has(n))
                ans.add(n)
        return [...ans]
    }
}
