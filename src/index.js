module.exports = function solveSudoku(matrix) {

let result = matrix;
    if (solved(matrix)) {
        for (let i = 0; i < 9; i++) {
            for (let y = 0; y < 9; y++) {
                result[i][y] = matrix[i][y];
            }
        }
    }
    return result;
function solved(arr) {
    let l = [0, 0];

    if (valrc(arr, l)) return true;
    let row = l[0];
    let col = l[1];
    
    for (let numer = 1; numer < 10; numer++){
        if (elem_torf(arr, row, col, numer)){
            arr[row][col] = numer;
            if (solved(arr)) return true;
            arr[row][col] = 0;
        }
    }
    return false;
}
function elem_torf(arr, row, col, numer){
    return in_str(arr, row, numer) && in_col(arr, col, numer) && in_cell(arr, row - row % 3, col - col % 3, numer);
}
function valrc(arr, l) {
    for (let row = 0; row < 9; row++){
        for (let col = 0; col < 9; col++){
            if (arr[row][col] === 0){
                l[0] = row;
                l[1] = col;
                return false;
            }
        }
    }
    return true;
}
function in_str(arr, row, numer) {
    for (let i = 0; i < 9; i++){
        if (arr[row][i] === numer){
            return false;
        }
    }
    return true;
}

function in_col(arr, col, numer) {
    for (let y = 0; y < 9; y++){
        if (arr[y][col] === numer){
            return false;
        }
    }
    return true;
}

function in_cell(arr, row, col, numer) {
    for (let i = 0; i < 3; i++){
        for (let y = 0; y < 3; y++){
            if (arr[i + row][y + col] === numer){
                return false;
            }
        }
    }
    return true;
}
}