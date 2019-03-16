module.exports = function solveSudoku(matrix) {
  // your solution
    generateValue(matrix);
    return matrix;
};

function checkValidation(arr, row, col){
    return (validateRow(arr, row, col)&&validateCol(arr, row, col)&&validateSquare(arr, row, col));
}

function validateRow(arr, row, col){
    for (let j = 0; j < 9; j++){
        if (col === j)
            continue;
        if (arr[row][col] === arr[row][j])
            return false;
    }
    return true;
}
function validateCol(arr, row, col){
    for (let i = 0; i < 9; i++){
        if (row === i)
            continue;
        if (arr[row][col] === arr[i][col])
            return false;
    }
    return true;
}
function validateSquare(arr, row, col) {
    let squareRow = Math.floor(row/3)*3;
    let squareCol = Math.floor(col/3)*3;

    for (let i = squareRow; i < squareRow + 3; i++) {
        for (let j = squareCol; j < squareCol + 3; j++) {
            if ((i === row)&&(j === col))
                continue;
            if (arr[i][j] === arr[row][col])
                return false;
        }
    }
    return true;
}

function generateValue(arr){
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (arr[i][j] === 0){
                for (let k = 1; k <= 9; k++){
                    arr[i][j] = k;
                    if (checkValidation(arr, i, j))
                        if (generateValue(arr))
                            return true;
                }
                arr[i][j] = 0;
                return false;
            }
        }
    }
    return true;
}