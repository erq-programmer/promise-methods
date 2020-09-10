const promiseLast = <T>(arrayOfPromise: Array<T>) => {
  let counter = 0;
  const arrayOfPromiseLength: number = arrayOfPromise.length;

  return new Promise((resolve, reject) => {
    if (arrayOfPromiseLength === 0) resolve({});

    arrayOfPromise.forEach(async (element) => {
      try {
        const resolvedElement = await Promise.resolve(element);
        counter++;
        if (counter === arrayOfPromiseLength) {
          resolve(resolvedElement);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

export default promiseLast;
