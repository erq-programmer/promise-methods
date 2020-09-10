import promiseAll from '../promise-methods/promiseAll';
import promiseLast from '../promise-methods/promiseLast';

const mockedSuccessPromise1 = Promise.resolve(3);
const mockedSuccessPromise2 = 42;
const mockedSuccessPromise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const mockedFailPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise reject');
  }, 100);
});
const mockedArrayOfSuccessPromises = [
  mockedSuccessPromise1,
  mockedSuccessPromise2,
  mockedSuccessPromise3,
];

describe('Testing promiseAll function', () => {
  it('should return expected array of values', () => {
    expect.assertions(1);
    const expectedSuccessResponse = [3, 42, 'foo'];
    return promiseAll(mockedArrayOfSuccessPromises).then((res) => {
      expect(res).toEqual(expectedSuccessResponse);
    });
  });

  it('should return empty array when function parameter is empty array', () => {
    expect.assertions(1);
    const expectedResponse: Array<any> = [];
    return promiseAll([]).then((res) => {
      expect(res).toEqual(expectedResponse);
    });
  });

  it('should return an array of the same length as the input array', () => {
    expect.assertions(1);
    return promiseAll(mockedArrayOfSuccessPromises).then((res: any) => {
      expect(res.length).toBe(mockedArrayOfSuccessPromises.length);
    });
  });

  it('should return error when any promise is rejected', () => {
    expect.assertions(1);
    return promiseAll([
      ...mockedArrayOfSuccessPromises,
      mockedFailPromise,
    ]).catch((error) => expect(error).toMatch('Promise reject'));
  });

  // it('should throw error when we pass bad type of props', () => {
  //   expect.assertions(1);
  //   const expectedResponse: any[] = [];
  //   return promiseAll('test').catch((error) =>
  //     expect(error).toMatch('Function parameter must be array')
  //   );
  // });
});

describe('Testing promiseLast function', () => {
  it('should return expected value', () => {
    expect.assertions(1);
    const expectedSuccessResponse = 'foo';
    return promiseLast(mockedArrayOfSuccessPromises).then((res) => {
      expect(res).toEqual(expectedSuccessResponse);
    });
  });

  it('should return empty object when function parameter is empty array', () => {
    expect.assertions(1);
    const expectedResponse: object = {};
    return promiseLast([]).then((res) => {
      expect(res).toEqual(expectedResponse);
    });
  });

  it('should return error when any promise is rejected', () => {
    expect.assertions(1);
    return promiseLast([
      ...mockedArrayOfSuccessPromises,
      mockedFailPromise,
    ]).catch((error) => expect(error).toMatch('Promise reject'));
  });
});
