/**Дана строка s. Найдите длину самой длинной подстроки без повторяющихся символов. Пример 1:
 * *Вход:** s = "abcabcbb"
**Выход:** 3
**Объяснение:** Ответ - "abc", длина равна 3.

 */

function lengthOfLongestSubstring(s) {
    let maxLength = 0; // переменная для хранения длины самой длинной подстроки
    let substring = ''; // переменная для хранения текущей подстроки без повторяющихся символов
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      // проверяем, есть ли текущий символ в текущей подстроке
      if (substring.includes(char)) {
        // находим индекс повторяющегося символа в текущей подстроке
        const index = substring.indexOf(char);
  
        // обновляем текущую подстроку, отсекая все символы до повторяющегося символа
        substring = substring.slice(index + 1);
      }
  
      // добавляем текущий символ в текущую подстроку
      substring += char;
  
      // обновляем длину самой длинной подстроки, если текущая подстрока стала длиннее
      maxLength = Math.max(maxLength, substring.length);
    }
  
    return maxLength;
  }
  
  // Примеры использования:
  console.log(lengthOfLongestSubstring("abcabcbb")); // 3
  console.log(lengthOfLongestSubstring("bbbbb")); // 1
  console.log(lengthOfLongestSubstring("pwwkew")); // 3