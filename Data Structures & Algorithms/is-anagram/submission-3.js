class Solution {
    isAnagram(s, t) {
        let freq = Array(26).fill(0)
        for(const c of s)
            freq[c.charCodeAt(0) - 97]++
        for(const c of t){
            freq[c.charCodeAt(0) - 97]--
            if(freq[c.charCodeAt(0) - 97] < 0)
                return false
        }
        for(const n of freq)
            if(n !== 0)
                return false
        return true
    }
}
