class Solution {
public:
    int countSeniors(vector<string>& details) {
        int ans = 0;
        for(const auto &st: details)
            if((st[11] - '0') * 10 + (st[12] - '0') > 60)
                ans++;
        return ans;
    }
};