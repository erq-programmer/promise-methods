const promiseAll = <T>(arrayOfPromise: Array<T>) => {
  const resolvedElements: Array<T> = [];
  const arrayOfPromiseLength: number = arrayOfPromise.length;
  let idxCounter = 0;

  return new Promise((resolve, reject) => {
    if (arrayOfPromiseLength === 0) resolve([]);

    arrayOfPromise.forEach(async (element) => {
      try {
        const resolvedElement = await Promise.resolve(element);
        resolvedElements.push(resolvedElement);
        idxCounter++;
        if (idxCounter === arrayOfPromiseLength) resolve(resolvedElements);
      } catch (err) {
        reject(err);
      }
    });
  });
};

export default promiseAll;
