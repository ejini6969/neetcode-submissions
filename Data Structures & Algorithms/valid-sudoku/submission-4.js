class Solution {
    isValidSudoku(board) {
        let rowSet = Array.from({length: 9}, _ => Array(10).fill(0)),
            colSet = Array.from({length: 9}, _ => Array(10).fill(0)),
            boxSet = Array.from({length: 9}, _ => Array(10).fill(0));
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== ".") {
                    const n = +board[i][j]
                    if (
                        rowSet[i][n] ||
                        colSet[j][n] ||
                        boxSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)][n]
                    )
                        return false;
                    rowSet[i][n] = 1;
                    colSet[j][n] = 1;
                    boxSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)][n] = 1;
                }
            }
        }
        return true;
    }
}
