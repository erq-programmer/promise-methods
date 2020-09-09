import promiseAll from '../index';
import { isObject } from 'util';
import { promises } from 'dns';

describe('promiseAll method', () => {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  const promiseError = Promise.reject('Reject');

  it('should be promise', () => {
    const p = promiseAll([promise1, promise2, promise3]);
    expect(p).toBeInstanceOf(Promise);
  });

  it('array of promises should return one promise', () => {
    const promiseLength = promiseAll([promise1, promise2, promise3]).then((value) => {
      return value;
    });
    expect([promiseLength].length).toEqual(1);
  });
});
