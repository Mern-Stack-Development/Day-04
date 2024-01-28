const fs = require("fs");

// Util function to promisify fs.readFile
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

console.log("Start");

// Read file within a promise
readFileAsync("input.txt")
  .then((data) => {
    console.log(data.toString());
    // After the file read is completed, setImmediate is called.
    setImmediate(() => {
      console.log("Immediate Callback");
    });
    // console.log("Immediate Callback");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("End");
  });
