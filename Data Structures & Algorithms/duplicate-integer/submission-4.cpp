class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_set<int> us;
        for(int n: nums){
            if(us.contains(n))
                return true;
            us.insert(n);
        }
        return false;
    }
};