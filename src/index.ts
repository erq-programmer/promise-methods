import promiseLast from './promise-methods/promiseLast';

/********************** promises example **********************/
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

console.log(promiseLast([promise1, promise2, promise3]));
