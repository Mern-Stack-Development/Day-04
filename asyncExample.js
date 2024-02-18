async function fetchDataWithAsyncAwait() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  // Example usage with async/await
  (async () => {
    try {
      const data = await fetchDataWithAsyncAwait();
      console.log('Data with Async/Await:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  })();
  