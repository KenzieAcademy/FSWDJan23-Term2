import testData from "../testData";

/**
 * the * on function indicates a generator function;
 * a function that creates an almost "cyclic" function
 * that can be called multiple times and have different results
 * based on the previous calls
 */
function* idGenerator(dataset) {
  let maxId = dataset[0] ? dataset[0].id : 1;
  dataset.forEach((obj) => {
    if (obj.id > maxId) {
      maxId = obj.id;
    }
  });

  while (true) {
    yield maxId + 1;
    maxId++;
  }
}

export default idGenerator;

export const playerIdGenerator = idGenerator(testData);
