/**
Напишите функцию calc(str), которая вычисляет результат выражения в обратной польской нотации (ОПН). 
ОПН представляет собой выражение, в котором операнды и операторы записаны в особом порядке:
- Операнды (числа) и операторы (+, -, *, /) разделяются пробелами.
- Операция выполняется над двумя последними числами, встреченными перед оператором.
- Выражение вычисляется слева направо.
Если входная строка некорректна, функция должна вернуть сообщение об ошибке. Возможные ошибки:
"Error in Syntax" — если выражение содержит синтаксическую ошибку.
"Error in Operands" — если операнд не является числом.
"Division by zero" — если в выражении происходит деление на ноль.

Примеры:
Input 1: "8 2 / 3 +"
Output 1: 7

Input 2: "7 2 3 * -"
Output 2: 1
*/

function calc(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Error in Syntax";
  }
  const stack = [];
  const tokens = str.split(" ");

  for (let token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      if (stack.length < 2) {
        return "Error in Syntax";
      }

      const a = stack.pop();
      const b = stack.pop();

      if (token === "/" && b === "0") return "Division by zero";

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(b / a);
          break;
      }
    } else {
      const num = Number(token);
      if (!Number.isFinite(num)) {
        return "Error in Operands";
      }
      stack.push(num);
    }
  }

  return stack[0];
}
