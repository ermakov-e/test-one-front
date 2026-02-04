/**
Напишите функцию groupAnagrams(arr), которая принимает массив строк arr и группирует анаграммы вместе. Условия:
Анаграмма — это слово или фраза, образованные путем перестановки букв другого слова или фразы (например, "tea" => "eat").

Примеры:
Input 1: ["ab", "ba", "abc", "bca"]
Output 1: [["abc","bca"],["ab","ba"]]

Input 2: ["listen", "silent", "enlist"]
Output 2: [["listen","silent","enlist"]]
*/

function groupAnagrams(arr: string[]) {
  const map = new Map();
  for (let word of arr) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return Array.from(map.values());
}
