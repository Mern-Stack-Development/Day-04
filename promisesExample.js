function fetchDataWithPromise() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json());
  }
  
  // Example usage with promise
  fetchDataWithPromise()
    .then(data => console.log('Data with Promise:', data))
    .catch(error => console.error('Error:', error));
  