/**Реализуйте функцию runInOrder(functions, delays), 
 * которая принимает массив функций и массив задержек,
 *  и выполняет функции в указанном порядке с соответствующими задержками. */

var runInOrder = function (functions, delays) {
    async function execute() {
      for (let i = 0; i < functions.length; i++) {
        await new Promise(resolve => setTimeout(resolve, delays[i]));
        functions[i]();
      }
    }
    execute();
  };

  const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
const delays = [2000, 1000, 3000];

runInOrder(functions, delays); 
