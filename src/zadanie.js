// Programowanie asynchroniczne oraz promisy

// w Javascript Promise posiadają swoje metody
// Promise.all(arrayOfPromises)
// Promise.race(arrayOfPromises)

// Wg mnie powinny jeszcze posiadać metodę:
// Promise.last(arrayOfPromise) - zwraca do then tylko ostatnią promisę, która się wykonała asynchronicznie,
// a jeśli wystąpił błąd w co najmniej jednej promisę, zwraca do catch ten błąd po ukończeniu ostatniej promisy

// Promise.ignoreErrors(arrayOfPromise) - nie ważne co się stanie,
// zwracane są tylko te wyniki promise, które zakończyły się sukcesem, błędy są ignorowane

// skopiuj identyczne działanie tych metod w funkcjach
// const promiseAll = (arrayOfPromise) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const promiseRace = (arrayOfPromise) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const promiseLast = (arrayOfPromise) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const promiseIgnoreErrors = (arrayOfPromise) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };
