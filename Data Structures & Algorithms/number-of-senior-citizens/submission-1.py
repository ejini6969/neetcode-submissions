class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return sum(int(s[11]) * 10 + int(s[12]) > 60 for s in details)