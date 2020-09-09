import promiseAll from '../promise-methods/promiseAll';
import pormiseLast from '../promise-methods/promiseLast';

describe('promiseAll method', () => {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
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

  // test('example promises should return array with resolves', async () => {
  //   // expect.assertions(1);
  //   const p = await promiseAll([promise1, promise2, promise3]).then(
  //     (val) => val
  //   );
  //   expect(p).toEqual([3, 1337, 'foo']);
  // });
});
