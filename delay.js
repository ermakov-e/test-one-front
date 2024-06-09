/**Реализуйте функцию delay(ms), которая возвращает промис, разрешающийся через указанное количество миллисекунд. */

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Пример использования:
delay(2000).then(() => {
  console.log("2 секунды прошло");
});
