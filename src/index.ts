import promiseLast from './promise-methods/promiseLast';
import promiseAll from './promise-methods/promiseAll';

/********************** promises example **********************/
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'bar');
});

promiseAll([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
