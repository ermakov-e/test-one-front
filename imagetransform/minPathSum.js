/**Дана сетка m x n, заполненная неотрицательными числами. Найдите путь от верхнего левого угла до нижнего правого угла, который минимизирует сумму всех чисел вдоль этого пути. */

function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Создаем двумерный массив dp с размерами m x n
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // Заполняем первую строку dp суммами значений в grid
  for (let j = 0; j < n; j++) {
    if (j === 0) {
      dp[0][j] = grid[0][j];
    } else {
      dp[0][j] = grid[0][j] + dp[0][j - 1];
    }
  }

  // Заполняем первый столбец dp суммами значений в grid
  for (let i = 0; i < m; i++) {
    if (i === 0) {
      dp[i][0] = grid[i][0];
    } else {
      dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
  }

  // Заполняем остальные значения dp
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  // Возвращаем значение в нижем правом углу dp
  return dp[m - 1][n - 1];
}

// Примеры тестов
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
); // 7
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // 12
