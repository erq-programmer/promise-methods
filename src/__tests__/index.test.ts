import promiseAll from '../promise-methods/promiseAll';
import promiseLast from '../promise-methods/promiseLast';

describe('promiseAll method', () => {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'bar');
  });
  const promiseError = Promise.reject('Reject');

  test('should be promise', () => {
    const p = promiseAll([promise1, promise2, promise3]);
    expect(p).toBeInstanceOf(Promise);
  });

  test('array of promises should return one promise', () => {
    const promiseLength = promiseAll([promise1, promise2, promise3]).then(
      (value) => {
        return value;
      }
    );
    expect([promiseLength].length).toEqual(1);
  });

  test('should return bar', () => {
    promiseLast([promise1, promise2, promise3, promise4]).then((values) => {
      expect(values).toEqual('bar');
    });
  });
});

// new Promise((resolve, reject) => {
//   reject(new Error("Whoops!"));
// }).catch(alert); // Error: Whoops!
