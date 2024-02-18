const fs = require('fs');
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to type the data
rl.question('Please type the data to be written to the file: ', (userInput) => {
  // Write the user input to a text file named 'userfile.txt'
  fs.appendFile('writefile.txt', userInput + '\n', 'utf-8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
    } else {
      console.log('Data successfully written to writefile.txt');
    }

    // Close the readline interface
    rl.close();
  });
});

// Listen for the close event to terminate the script
rl.on('close', () => {
  process.exit(0);
});
