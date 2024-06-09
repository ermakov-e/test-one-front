/**Учитывая n пар скобок, напишите функцию для генерации всех комбинаций правильно составленных скобок.
 * Ввод: n = 3 Вывод: ["((()))","(()())","(())()","()(())","()()()"]
 */

function generateParenthesis(n) {
  const result = [];

  backtrack("", 0, 0);

  return result;

  function backtrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
