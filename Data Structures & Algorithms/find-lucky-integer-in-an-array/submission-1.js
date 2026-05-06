class Solution {
    findLucky(arr) {
        let mn = 501, mx = 0, freq = Array(501).fill(0)
        for(const n of arr){
            mn = Math.min(mn, n)
            mx = Math.max(mx, n)
            freq[n]++
        }
        for(let i = mx; i >= mn; i--)
            if(freq[i] === i)
                return i
        return -1
    }
}
