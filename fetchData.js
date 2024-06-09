/**Напишите функцию fetchData, которая симулирует асинхронный запрос данных. Функция должна принимать два параметра: url и callback. fetchData должна возвращать промис, который разрешается через 2 секунды с фиктивными данными, и затем вызывает функцию callback.

Необходимо вернуть data такого вида:

const data = { result: 'Some data receiasdasdved from ' + url }; */

function fetchData(url, callback) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: 'Some data received from ' + url };
        resolve(data);
        callback(data);
      }, 2000);
    });
  }
  
  // Пример использования:
  const url = 'https://example.com';
  
  fetchData(url, (data) => {
    console.log('Callback received data:', data);
  }).then((data) => {
    console.log('Promise resolved with data:', data);
  });