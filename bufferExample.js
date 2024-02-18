const fs = require('fs');

// Read the content of a file asynchronously
fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Convert the content to uppercase using a buffer
  const bufferSrc = Buffer.from(data);
  const bufferDest = Buffer.alloc(bufferSrc.length);
  bufferSrc.copy(bufferDest);

  // Modify the content (convert to uppercase)
  const modifiedContent = bufferDest.toString('utf-8');

  // Write the modified content to a new file
  fs.writeFile('output.txt', modifiedContent, (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
    } else {
      console.log('File successfully written to output.txt');
    }
  });
});
