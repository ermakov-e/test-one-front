/**Дан массив целых чисел nums. Верните true, если в массиве есть хотя бы одно повторяющееся значение, и верните false, если все элементы различны. */

function containsDuplicate(nums) {
  const set = new Set(...nums);
  return set.size !== nums.length;
}
