// Different methods to create buffers
const buffer1 = Buffer.alloc(100);  // Create a buffer of 100 bytes
const buffer2 = new Buffer('UCSC');  // Create a buffer from a string
const buffer3 = Buffer.from([1, 2, 3, 4]);  // Create a buffer from an array

// Writing data to a buffer
buffer1.write("Happy Learning");

// Reading data from a buffer
const a = buffer1.toString('utf-8');
console.log(a);

// Checking if an object is a buffer
console.log(Buffer.isBuffer(buffer1));

// Getting the length of a buffer
console.log(buffer1.length);

// Copying a buffer
const bufferSrc = new Buffer("ABC");
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
const bufferOld = new Buffer('Hello world');
const bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());


// Concatenating two buffers
const bufferOne = new Buffer('Happy Learning');
const bufferTwo = new Buffer('With UCSC');
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());


