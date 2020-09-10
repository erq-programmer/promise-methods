const promiseLast = <T>(arrayOfPromise: Array<T>) => {
  if (!(arrayOfPromise instanceof Array))
    throw new Error('Function parameter must be array');

  let counter = 0;
  let finalResolvedElement;
  const arrayOfPromiseLength: number = arrayOfPromise.length;

  return new Promise((resolve, reject) => {
    if (arrayOfPromiseLength === 0) resolve({});

    arrayOfPromise.forEach(async (element) => {
      try {
        const resolvedElement = await Promise.resolve(element);
        counter++;
        finalResolvedElement = resolvedElement;

        if (counter === arrayOfPromiseLength) {
          resolve(finalResolvedElement);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

export default promiseLast;
