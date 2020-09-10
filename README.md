# `promise-methods` [![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)

Hello there! :fire :fire

Two custom methods for promises: promiseAll and promiseLast.

The promiseAll() method takes an array of promises to function parameter, and returns a single Promise that resolves to an array of the results.

The promiseLast() method takes an array of promises to function parameter, and returns a last resolved Promise.

## Technologies

- TypeScript
- Jest
- NPM

## Usage for promiseAll

```jsx
import useSetState from './promise-methods/promiseAll';

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

## Usage for promiseLast

```jsx
import useSetState from './promise-methods/promiseLast';

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'bar');
});

Promise.all([promise1, promise4, promise3, promise2]).then((values) => {
  console.log(values);
});
// expected output: "foo"
```

## Status

Project is: _in-progress_

## To-do

- [x] Tests for promiseAll
- [x] Tests for promiseLast
- [ ] Add more tests

## Contact

Created by [@erykslocinski](mailto:eryk.slocinski@gmail.com) - feel free to contact me!
