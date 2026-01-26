/**
Создайте функцию, которая принимает массив URL и функцию fetch, и запускает все запросы параллельно, но с ограниченным количеством одновременных запросов. Например, если вы запрашиваете 100 URL, но у вас есть ограничение в 5 одновременных запросов, то ваша функция должна гарантировать, что в любой момент времени не будет больше 5 одновременных запросов.
 */
const parallelPromisesWithLimit = async function (promisesArr, parallelLimit) {
  let results = [];
  let runningPromises = [];

  // Функция для запуска следующей задачи из очереди
  const runNext = async () => {
    if (promisesArr.length === 0) return;
    const promise = promisesArr.shift();
    const resultPromise = promise();

    runningPromises.push(resultPromise);
    resultPromise.then(() => {
      runningPromises.splice(runningPromises.indexOf(resultPromise), 1);
    });

    results.push(resultPromise);

    // Запустить следующую задачу, если количество запущенных меньше лимита
    if (runningPromises.length < parallelLimit) {
      runNext();
    }

    await resultPromise;

    // После завершения текущей задачи запустить следующую
    runNext();
  };

  // Запуск первых задач до достижения лимита
  while (runningPromises.length < parallelLimit && promisesArr.length > 0) {
    runNext();
  }

  // Ожидание завершения всех запущенных задач
  await Promise.all(runningPromises);

  // Ожидание завершения всех результатов
  return Promise.all(results);
};

const testURLs = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
  "https://jsonplaceholder.typicode.com/posts/7",
  "https://jsonplaceholder.typicode.com/posts/8",
  "https://jsonplaceholder.typicode.com/posts/9",
  "https://jsonplaceholder.typicode.com/posts/10",
];

function mockFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Response from ${url}`);
    }, 1000); // Увеличил время задержки для лучшей наглядности
  });
}

async function test() {
  // Запуск 5 одновременных запросов
  const results = await parallelPromisesWithLimit(
    testURLs.map((url) => () => mockFetch(url)),
    5
  );

  console.log(results);
}

test();
