/**
 * Написать функцию, которая принимает на вход Promise  и задержку(в мс) и возвращает новый Promise, который разрешается с тем же значением, но через определенную задержку
 */

const delayPromise = (promise, ms) => {
  return new Promise((resolve) => {
    promise.then((value) => {
      setTimeout(() => resolve(value), ms);
    });
  });
};

const myPromise = Promise.resolve(42);
const delayedPromise = delayPromise(myPromise, 1000);
delayedPromise.then((res) => console.log(res));
