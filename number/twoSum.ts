/**
Необходимо написать функцию twoSum(nums, target), которая принимает массив чисел nums и число target. 
Функция должна возвращать массив с двумя индексами элементов, сумма которых равна target. Гарантируется, что всегда существует ровно одно решение.

Примеры:
Input 1: [3, 3], 6
Output 1: [0, 1]

Input 2: [2, 7, 11, 5, 9, 10, 15], 9
Output 2: [0, 1]
*/

function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  for (let index = 0; index < nums.length || result.length === 0; index++) {
    for (
      let nextIndex = 1;
      nextIndex <= nums.length || result.length === 0;
      nextIndex++
    ) {
      if (nums[index] + nums[nextIndex] === target) {
        result = [index, nextIndex];
      }
    }
  }

  return result;
}
