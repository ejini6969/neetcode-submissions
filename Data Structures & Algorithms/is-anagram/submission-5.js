class Solution {
    isAnagram(s, t) {
        return [...s].sort().join("") === [...t].sort().join("")
    }
}
