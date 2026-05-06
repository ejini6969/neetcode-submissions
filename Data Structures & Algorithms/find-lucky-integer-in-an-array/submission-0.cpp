class Solution {
public:
    int findLucky(vector<int>& arr) {
        int mini = 501, maxi = 0;
        vector<int> freq(mini);
        for(int n: arr){
            mini = min(mini, n);
            maxi = max(maxi, n);
            freq[n]++;
        }
        for(int i = maxi; i >= mini; i--)
            if(freq[i] == i)
                return i;
        return -1;
    }
};