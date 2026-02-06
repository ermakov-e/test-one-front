/**
Напишите функцию capitalize(input), которая принимает строку input и возвращает её копию, где каждое слово начинается с заглавной буквы.
- "Слово" - это последовательность юникод-символов из группы "letters".
- Слова с дефисами (например, "что-то") считаются одним словом.

Примеры:
Input 1: 'что-то произошло'
Output 1: 'Что-то Произошло'

Input 2: 'foo-bar baz'
Output 2: 'Foo-bar Baz'
*/

function capitalize(input) {
  const arrayInput = input.split(" ");

  const result = arrayInput.map((word) => {
    let arrayWord = word.split("");
    arrayWord[0] = arrayWord[0].toUpperCase();
    return arrayWord.join("");
  });

  return result.join(" ");
}
