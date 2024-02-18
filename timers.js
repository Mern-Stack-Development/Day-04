console.log('Start');

setTimeout(function() {
    console.log('Timeout Callback');
    process.exit();
}, 5000);

setInterval(() => {
    console.log('Interval Callback');
}, 1000);

console.log('End');