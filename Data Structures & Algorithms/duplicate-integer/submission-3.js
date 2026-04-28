class Solution {
    hasDuplicate(nums) {
        let st = new Set()
        for(const n of nums){
            if(st.has(n))
                return true
            st.add(n)
        }
        return false
    }
}
