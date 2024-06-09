/**Дан массив целых чисел nums и целое число target. Вернуть индексы двух чисел таких, что их сумма равна target.

Вы можете предположить, что у каждого ввода ровно одно решение, и вы не можете использовать один элемент дважды.

Вы можете вернуть ответ в любом порядке. */

function twoSumNumber(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
  }
}
