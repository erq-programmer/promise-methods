const promiseAll = (arrayOfPromise: Array<any>) => {
  return new Promise((resolve, reject) => {
    const arrayOfPromiseLength: number = arrayOfPromise.length;

    if (arrayOfPromiseLength === 0) resolve([]);

    let resolvedElements: Array<any> = [];

    arrayOfPromise.forEach((element) => {
      const promisedElement = Promise.resolve(element);

      promisedElement
        .then((response) => {
          resolvedElements.push(response);
        })
        .catch((error) => reject(new Error(error)));
    });

    resolve(resolvedElements);
  });
};

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
