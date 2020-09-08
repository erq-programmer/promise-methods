const promiseAll = (arrayOfPromise: Array<any>) => {
  return new Promise((resolve, reject) => {
    const arrayOfPromiseLength: number = arrayOfPromise.length;

    if (arrayOfPromiseLength === 0) resolve([]);

    let resolvedElements: Array<any> = new Array(arrayOfPromiseLength);
    let resolvedCounter = 0;

    arrayOfPromise.forEach((element, index) => {
      const allPromisesResolved = resolvedCounter === arrayOfPromise.length;
      if (element instanceof Promise) {
        element
          .then((data) => {
            resolvedElements[index] = data;
            resolvedCounter += 1;
            if (allPromisesResolved) resolve(resolvedElements);
          })
          .catch((error) => reject(new Error('error')));
      } else {
        resolvedElements[index] = element;
        resolvedCounter += 1;
        if (allPromisesResolved) resolve(resolvedElements);
      }
    });
  });
};

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

promiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
