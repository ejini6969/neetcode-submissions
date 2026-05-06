class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int ones = 0, ans = 0;
        for(int n: nums){
            if(n == 1)
                ones++;
            else{
                ans = max(ans, ones);
                ones = 0;
            }
        }
        return max(ans, ones);
    }
};