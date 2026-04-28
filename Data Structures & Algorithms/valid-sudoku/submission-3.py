class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rowset, colset, boxset = (
            [[0] * 10 for _ in range(9)],
            [[0] * 10 for _ in range(9)],
            [[0] * 10 for _ in range(9)],
        )
        for i in range(9):
            for j in range(9):
                if board[i][j].isdigit():
                    n = int(board[i][j])
                    if (
                        rowset[i][n]
                        or colset[j][n]
                        or boxset[i // 3 * 3 + j // 3][n]
                    ):
                        return False
                    rowset[i][n] = 1
                    colset[j][n] = 1
                    boxset[i // 3 * 3 + j // 3][n] = 1
        return True
