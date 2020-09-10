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
const promise5 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'errorval');
});

const p = new Promise((resolve, reject) => {
  reject(new Error('Oops!'));
});

promiseAll([promise1, promise2, promise3, promise4, p]).then((values) => {
  console.log(values);
});
