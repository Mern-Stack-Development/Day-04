const fs = require('fs');

// Read the content of the 'readfile.txt' file asynchronously
fs.readFile('readfile.txt', 'utf-8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading file:', readErr);
    return;
  }

  // Display the content in the console
  console.log('Content of readfile.txt:\n', data);
});
