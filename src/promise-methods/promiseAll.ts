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

export default promiseAll;
