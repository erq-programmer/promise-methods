/********************** promiseAll method **********************/
const promiseAll = <T>(arrayOfPromise: Array<T>) => {
  return new Promise((resolve, reject) => {
    const arrayOfPromiseLength: number = arrayOfPromise.length;

    if (arrayOfPromiseLength === 0) resolve([]);

    let resolvedElements: Array<T> = [];

    let i: number = 0;

    arrayOfPromise.forEach((element) => {
      const promisedElement = Promise.resolve(element);

      promisedElement
        .then((response) => {
          resolvedElements.push(response);
          i++;
          if (i === arrayOfPromiseLength) resolve(resolvedElements);
        })
        .catch((error) => reject(new Error(error)));
    });
  });
};

/********************** promises example **********************/
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// promiseAll([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

export default promiseAll;
