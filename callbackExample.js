function fetchDataWithCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  // Example usage with callback
  fetchDataWithCallback((error, data) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data with Callback:', data);
    }
  });
  