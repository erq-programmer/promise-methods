import promiseAll from '../index';

describe('promiseAll method', () => {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  it('It should return expected data', () => {});

  it('tests error with promises', () => {
    expect.assertions(1);
    return promiseAll[2].catch((e) => expect(e).toEqual(2));
  });
});
