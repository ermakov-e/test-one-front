/**Дана строка columnTitle, представляющая заголовок столбца на листе Excel. Верните соответствующий ему номер столбца.
Инициализировать переменную result для хранения итогового номера столбца и присвоить ей значение 0.
Проходить по каждой букве в строке columnTitle, начиная с последней.
Для каждой буквы получить ее числовое значение, вычитая значение буквы "A" и добавляя 1.
Умножить числовое значение каждой буквы на 26, возведенное в степень, которая равна позиции буквы в строке columnTitle.
Прибавить полученное значение к result.
Вернуть result как итоговый номер столбца..
 */

function titleToNumber(columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    // Получаем ASCII-код текущего символа и вычитаем ASCII-код символа 'A' для получения числового значения.
    const charCode = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    // Умножаем числовое значение символа на 26 в степени, соответствующей его позиции.
    result = result * 26 + charCode;
  }
  return result;
}

// Обратная

function convertToTitle(columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    const num = (columnNumber - 1) % 26;
    result = String.fromCharCode(num + 65) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return result;
}
