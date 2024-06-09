/**Дана матрица изображения размером n x n. Необходимо повернуть изображение на 90 градусов по часовой стрелке.

Нужно повернуть изображение на месте (in-place). Это означает, что нужно изменить входную 2D матрицу непосредственно. НЕ выделяйте дополнительную 2D матрицу и не проводите поворот.
**Вход:** matrix = [[1,2,3],[4,5,6],[7,8,9]]
**Выход:** [[7,4,1],[8,5,2],[9,6,3]] */

const rotateImage = (matrix) => {
  const n = matrix.length;

  // Транспонирование матрицы
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Переворачивание столбцов матрицы
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
};
