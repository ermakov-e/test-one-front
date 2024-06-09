/**Определить, является ли доска Судоку размером 9 x 9 действительной. Только заполненные ячейки должны быть проверены в соответствии со следующими правилами:

Каждая строка должна содержать цифры от 1 до 9 без повторений.
Каждый столбец должен содержать цифры от 1 до 9 без повторений.
Каждый из девяти 3 x 3 подквадратов сетки должен содержать цифры от 1 до 9 без повторений. */

const isValidSudoku = (board) => {
  // Проверка строк
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (rowSet.has(board[i][j])) {
          return false;
        }
        rowSet.add(board[i][j]);
      }
    }
  }

  // Проверка столбцов
  for (let j = 0; j < 9; j++) {
    const colSet = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== ".") {
        if (colSet.has(board[i][j])) {
          return false;
        }
        colSet.add(board[i][j]);
      }
    }
  }

  // Проверка подквадратов 3x3
  for (let k = 0; k < 9; k++) {
    const subgridSet = new Set();
    for (let i = Math.floor(k / 3) * 3; i < Math.floor(k / 3) * 3 + 3; i++) {
      for (let j = (k % 3) * 3; j < (k % 3) * 3 + 3; j++) {
        if (board[i][j] !== ".") {
          if (subgridSet.has(board[i][j])) {
            return false;
          }
          subgridSet.add(board[i][j]);
        }
      }
    }
  }

  return true;
};
