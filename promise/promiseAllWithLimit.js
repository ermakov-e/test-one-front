/**
 * Реализоывть функцию promiseAllWithLimit(tasks, limit), которая:
    1. Принимает: tasks — массив функций, каждая из которых возвращает Promise.
        limit — число, обозначающее максимальное количество промисов, которые могут выполняться одновременно.
    2. Возвращает Promise, который:
        Резолвится массивом результатов всех промисов в том же порядке, что и входные функции.
        Реджектится, если любой из промисов отклоняется — с тем же значением ошибки, без продолжения выполнения остальных задач.
*/

const promiseAllWithLimit = (tasks, limit) => {
  return new Promise((resolve, reject) => {
    const results = new Array(tasks.length);
    let inProgress = 0;
    let completed = 0;
    let index = 0;
    let hasError = false;

    function runNext() {
      if (hasError || index >= tasks.length) return;

      const currentIndex = index;
      const task = tasks[currentIndex];
      index++;
      inProgress++;

      task()
        .then((result) => {
          results[currentIndex] = result;
          inProgress--;
          completed++;
          if (completed === tasks.length) {
            resolve(results);
          } else {
            runNext();
          }
        })
        .catch((err) => {
          hasError = true;
          reject(err);
        });

      if (inProgress < limit) {
        runNext();
      }
    }

    runNext();
  });
};

const tasks = [
  () => delay(100, "a"),
  () => delay(50, "b"),
  () => delay(10, "c"),
  () => delay(200, "d"),
];

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
