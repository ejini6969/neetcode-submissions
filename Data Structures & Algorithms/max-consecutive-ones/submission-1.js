class Solution {
    findMaxConsecutiveOnes(nums) {
        let ans = 0, ones = 0
        for(const n of nums){
            if(n)
                ones++
            else{
                ans = Math.max(ans, ones)
                ones = 0
            }
        }
        return Math.max(ans, ones)
    }
}
