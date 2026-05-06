class Solution {
    intersection(nums1, nums2) {
        let freq = Array(1001).fill(0), freq2 = Array(1001).fill(0), ans = []
        for(const n of nums1)
            freq[n] = 1
        for(const n of nums2)
            freq2[n] = 1
        for(let i = 0; i < 1001; i++)
            if(freq[i] && freq2[i])
                ans.push(i)
        return ans
    }
}
