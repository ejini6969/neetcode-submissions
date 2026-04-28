class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rowset, colset, boxset = (
            [set() for _ in range(9)],
            [set() for _ in range(9)],
            [set() for _ in range(9)],
        )
        for i in range(9):
            for j in range(9):
                if board[i][j].isdigit():
                    if (
                        board[i][j] in rowset[i]
                        or board[i][j] in colset[j]
                        or board[i][j] in boxset[i // 3 * 3 + j // 3]
                    ):
                        return False
                    rowset[i].add(board[i][j])
                    colset[j].add(board[i][j])
                    boxset[i // 3 * 3 + j // 3].add(board[i][j])
        return True
