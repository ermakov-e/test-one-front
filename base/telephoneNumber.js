/**Дана строка, содержащая цифры от 2 до 9 включительно. Вернуть все возможные комбинации букв, которые могут представлять данное число. Вернуть ответ в любом порядке.
 * **Вход:** digits = "23"
 **Выход:** ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

const letterCombinations = (digits) => {
  const keypad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];

  const helper = (digits, current = "") => {
    if (digits.length === 0) {
      if (current !== "") {
        result.push(current);
      }
      return;
    }

    const letters = keypad[digits[0]];
    for (let i = 0; i < letters.length; i++) {
      helper(digits.slice(1), current + letters[i]);
    }
  };

  helper(digits);

  return result;
};
