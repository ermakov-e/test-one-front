/**
 * Написать функцию wait, которая позволит делать задержку вызова через await на переданное количество миллисекунд
 */

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), ms);
  });
};

async function code() {
  await wait(1000);
  console.log("success");
}
