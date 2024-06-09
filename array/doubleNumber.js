/** Учитывая непустой массив целых чисел nums, каждый элемент встречается дважды, кроме одного. Найдите это единственное число.*/

function findUniqueNumber(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return [...set][0];
}

function findUniqueNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}

// Пример использования:
const nums = [4, 1, 2, 1, 2];
const uniqueNumber = findUniqueNumber(nums);
console.log(uniqueNumber); // Output: 4
