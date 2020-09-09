const promiseLast = <T>(arrayOfPromise: Array<T>) => {
  return new Promise((resolve, reject) => {
    const arrayOfPromiseLength: number = arrayOfPromise.length;

    if (arrayOfPromiseLength === 0) resolve([]);

    let i: number = 0;

    arrayOfPromise.forEach((element) => {
      const promisedElement = Promise.resolve(element);

      promisedElement
        .then((response) => {
          if (i === arrayOfPromiseLength) {
            resolve(response);
          }
          i++;
        })
        .catch((error) => reject(new Error(error)));
    });
  });
};

export default promiseLast;