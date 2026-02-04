/**
Напишите функцию, которая принимает массив целых чисел nums и целое число k, и возвращает массив из k наиболее часто встречающихся элементов. 
Условия:
- Если k больше количества уникальных элементов в массиве, вернуть все уникальные элементы.

Примеры:
Input 1: [1, 1, 1, 2, 2, 3], 2
Output 1: [1, 2]

Input 2: [1, 2, 3, 4, 5], 2
Output 2: [1, 2]
*/

function arrOfK(nums: number[], k: number) {
  const result = {};

  for (let item of nums) {
    if (result[item]) {
      result[item] = result[item] + 1;
    } else {
      result[item] = 1;
    }
  }

  return Object.keys(result)
    .sort((a, b) => result[b] - result[a])
    .slice(0, k)
    .map(Number);
}
