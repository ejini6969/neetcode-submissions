class Solution {
    intersection(nums1, nums2) {
        return Array.from(new Set(nums1).intersection(new Set(nums2)))
    }
}
