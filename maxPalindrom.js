/**Дана строка s. Вернуть самую длинную палиндромную подстроку в s.
 * **Ввод:** s = "babad"
 *Вывод:** "bab"
 *Пояснение:** "aba" также является правильным ответом.
 */

function longestPalindrome(s) {
  // Шаг 1: Проверка на пустую строку
  if (s.length === 0) {
    return "";
  }

  let longest = "";

  // Шаг 2: Итерация по каждому символу в строке
  for (let i = 0; i < s.length; i++) {
    // Шаг 3: Поиск палиндрома с центром в текущем символе (нечетная длина)
    const palindromeOdd = expandAroundCenter(s, i, i);
    // Шаг 4: Поиск палиндрома с центром между текущим и следующим символом (четная длина)
    const palindromeEven = expandAroundCenter(s, i, i + 1);

    // Выбираем самый длинный палиндром из найденных
    const currentLongest =
      palindromeOdd.length > palindromeEven.length
        ? palindromeOdd
        : palindromeEven;

    // Обновляем самый длинный палиндром, если текущий длиннее
    if (currentLongest.length > longest.length) {
      longest = currentLongest;
    }
  }

  // Шаг 5: Возврат самой длинной палиндромной подстроки
  return longest;
}

function expandAroundCenter(s, left, right) {
  // Шаг 1: Поиск палиндрома с текущими left и right
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  // Шаг 2: Возврат найденного палиндрома
  return s.slice(left + 1, right);
}

// Примеры использования:
const s1 = "babad";
console.log(longestPalindrome(s1)); // Вывод: "bab" или "aba"

const s2 = "cbbd";
console.log(longestPalindrome(s2)); // Вывод: "bb"
