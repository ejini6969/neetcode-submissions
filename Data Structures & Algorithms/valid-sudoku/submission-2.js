class Solution {
    isValidSudoku(board) {
        let rowSet = Array.from({length: 9}, _ => new Set()),
            colSet = Array.from({length: 9}, _ => new Set()),
            boxSet = Array.from({length: 9}, _ => new Set());
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== ".") {
                    if (
                        rowSet[i].has(board[i][j]) ||
                        colSet[j].has(board[i][j]) ||
                        boxSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(board[i][j])
                    )
                        return false;
                    rowSet[i].add(board[i][j]);
                    colSet[j].add(board[i][j]);
                    boxSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(board[i][j]);
                }
            }
        }
        return true;
    }
}
